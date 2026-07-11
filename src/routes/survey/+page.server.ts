import { env } from "$env/dynamic/private";
import { fail, type Actions } from "@sveltejs/kit";

export const prerender = false;

const CONTACT_RECIPIENT = "info@omniwerx.io";
const MAX_EMAIL_LENGTH = 254;
const MAX_SHORT_ANSWER_LENGTH = 180;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const clientVolumeLabels = {
  "1-5": "1–5",
  "6-15": "6–15",
  "16-30": "16–30",
  "31-50": "31–50",
  "50-plus": "50+",
} as const;

const workflowAreaLabels = {
  "sheets-excel": "Google Sheets or Excel",
  "notion-airtable": "Notion or Airtable",
  "dedicated-coaching-app":
    "A dedicated coaching app — Trainerize, TrueCoach, Everfit, CoachRx, etc.",
  "loom-video": "Loom or video recording",
  messaging: "WhatsApp, Instagram or iMessage for sending feedback",
  "shared-drive": "Shared Google Drive or Dropbox for photos",
  other: "Other",
} as const;

const coachingAppExperienceLabels = {
  "use-now": "I use one now",
  "tried-stopped": "I tried one and stopped",
  "never-tried": "I’ve never tried one",
} as const;

const frictionLabels = {
  "assemble-review": "Pulling up and assembling everything to review",
  "review-data-photos": "Reviewing the data and photos",
  "recording-feedback": "Recording the video feedback",
  "sending-tracking": "Sending it and tracking who’s done",
  other: "Other",
} as const;

const monthlyToolSpendLabels = {
  "0": "$0",
  "under-30": "Under $30",
  "30-75": "$30–75",
  "75-150": "$75–150",
  "150-plus": "$150+",
} as const;

type ClientVolume = keyof typeof clientVolumeLabels;
type WorkflowArea = keyof typeof workflowAreaLabels;
type CoachingAppExperience = keyof typeof coachingAppExperienceLabels;
type Friction = keyof typeof frictionLabels;
type MonthlyToolSpend = keyof typeof monthlyToolSpendLabels;

type SurveyValues = {
  email: string;
  clientVolume: string;
  workflowAreas: string[];
  otherWorkflowTool: string;
  coachingAppExperience: string;
  coachingAppBarrier: string;
  friction: string;
  otherFriction: string;
  monthlyToolSpend: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const attempts = new Map<string, RateLimitEntry>();

const successMessage = "Thanks for completing the survey.";
const genericError =
  "Failed to send survey. Please try again or email us directly at info@omniwerx.io.";

const isClientVolume = (value: string): value is ClientVolume => value in clientVolumeLabels;

const isWorkflowArea = (value: string): value is WorkflowArea => value in workflowAreaLabels;

const isCoachingAppExperience = (value: string): value is CoachingAppExperience =>
  value in coachingAppExperienceLabels;

const isFriction = (value: string): value is Friction => value in frictionLabels;

const isMonthlyToolSpend = (value: string): value is MonthlyToolSpend =>
  value in monthlyToolSpendLabels;

const getString = (data: FormData, key: string) => {
  const value = data.get(key);

  return typeof value === "string" ? value.trim() : "";
};

const getStrings = (data: FormData, key: string) =>
  data
    .getAll(key)
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean);

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const hasTrustedOrigin = (request: Request, url: URL) => {
  const origin = request.headers.get("origin");

  if (!origin) return true;

  try {
    return new URL(origin).origin === url.origin;
  } catch {
    return false;
  }
};

const isCloudflareRateLimited = async (platform: App.Platform | undefined, key: string) => {
  const rateLimiter = platform?.env?.CONTACT_FORM_RATE_LIMITER;

  if (!rateLimiter) return null;

  try {
    const { success } = await rateLimiter.limit({ key: `survey:${key}` });

    return !success;
  } catch {
    return null;
  }
};

const isRateLimited = (key: string) => {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || entry.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;

  return entry.count > RATE_LIMIT_MAX;
};

const readSurveyValues = (data: FormData): SurveyValues => ({
  email: getString(data, "email").toLowerCase(),
  clientVolume: getString(data, "client-volume"),
  workflowAreas: getStrings(data, "workflow-areas"),
  otherWorkflowTool: getString(data, "workflow-areas-other"),
  coachingAppExperience: getString(data, "coaching-app-experience"),
  coachingAppBarrier: getString(data, "coaching-app-barrier"),
  friction: getString(data, "friction"),
  otherFriction: getString(data, "friction-other"),
  monthlyToolSpend: getString(data, "monthly-tool-spend"),
});

const validateEmail = (email: string) => {
  if (!email) return "Email is required.";

  if (email.length > MAX_EMAIL_LENGTH) {
    return "Email must be 254 characters or fewer.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please provide a valid email address.";
  }

  return null;
};

const validateRequiredSelections = (values: SurveyValues) => {
  if (!isClientVolume(values.clientVolume)) {
    return "Choose how many active clients you currently have.";
  }

  if (values.workflowAreas.length === 0) {
    return "Choose at least one weekly check-in tool.";
  }

  if (!values.workflowAreas.every(isWorkflowArea)) {
    return "Choose only valid weekly check-in tools.";
  }

  if (!isCoachingAppExperience(values.coachingAppExperience)) {
    return "Choose whether you have used an all-in-one coaching app.";
  }

  if (!isFriction(values.friction)) {
    return "Choose which check-in step takes the most time.";
  }

  if (!isMonthlyToolSpend(values.monthlyToolSpend)) {
    return "Choose your monthly coaching software spend.";
  }

  return null;
};

const validateConditionalOtherAnswers = (values: SurveyValues) => {
  if (values.workflowAreas.includes("other") && !values.otherWorkflowTool) {
    return "Add the other weekly check-in tool.";
  }

  if (values.friction === "other" && !values.otherFriction) {
    return "Add the other check-in step.";
  }

  return null;
};

const validateShortAnswerLengths = (values: SurveyValues) => {
  const shortAnswers = [values.otherWorkflowTool, values.coachingAppBarrier, values.otherFriction];

  if (shortAnswers.some((answer) => answer.length > MAX_SHORT_ANSWER_LENGTH)) {
    return `Short answers must be ${MAX_SHORT_ANSWER_LENGTH} characters or fewer.`;
  }

  return null;
};

const validateSurveyValues = (values: SurveyValues) =>
  validateEmail(values.email) ??
  validateRequiredSelections(values) ??
  validateConditionalOtherAnswers(values) ??
  validateShortAnswerLengths(values);

const formatWorkflowAreas = (values: SurveyValues) =>
  values.workflowAreas
    .map((value) => {
      if (value === "other") return `Other: ${values.otherWorkflowTool}`;
      return isWorkflowArea(value) ? workflowAreaLabels[value] : value;
    })
    .join(", ");

const formatFriction = (values: SurveyValues) => {
  if (values.friction === "other") return `Other: ${values.otherFriction}`;

  return isFriction(values.friction) ? frictionLabels[values.friction] : values.friction;
};

const buildEmailHtml = (values: SurveyValues) => `
  <h2>New Coach Workflow Survey Submission</h2>
  <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
  <p><strong>Active clients:</strong> ${escapeHtml(clientVolumeLabels[values.clientVolume as ClientVolume])}</p>
  <p><strong>Weekly check-in tools:</strong> ${escapeHtml(formatWorkflowAreas(values))}</p>
  <p><strong>All-in-one coaching app experience:</strong> ${escapeHtml(coachingAppExperienceLabels[values.coachingAppExperience as CoachingAppExperience])}</p>
  <p><strong>Barrier to adoption:</strong> ${escapeHtml(values.coachingAppBarrier || "—")}</p>
  <p><strong>Most time-consuming check-in step:</strong> ${escapeHtml(formatFriction(values))}</p>
  <p><strong>Monthly software spend:</strong> ${escapeHtml(monthlyToolSpendLabels[values.monthlyToolSpend as MonthlyToolSpend])}</p>
`;

const buildEmailText = (values: SurveyValues) => `New Coach Workflow Survey Submission

Email: ${values.email}
Active clients: ${clientVolumeLabels[values.clientVolume as ClientVolume]}
Weekly check-in tools: ${formatWorkflowAreas(values)}
All-in-one coaching app experience: ${coachingAppExperienceLabels[values.coachingAppExperience as CoachingAppExperience]}
Barrier to adoption: ${values.coachingAppBarrier || "—"}
Most time-consuming check-in step: ${formatFriction(values)}
Monthly software spend: ${monthlyToolSpendLabels[values.monthlyToolSpend as MonthlyToolSpend]}`;

const buildSubject = (email: string) =>
  `New Coach Workflow Survey from ${email.replace(/[\r\n]+/g, " ").slice(0, MAX_EMAIL_LENGTH)}`;

const sendSurveyEmail = async (values: SurveyValues) => {
  const apiKey = env.RESEND_API_KEY;
  const fromEmail = env.RESEND_FROM_EMAIL;
  const toEmail = env.RESEND_TO_EMAIL || CONTACT_RECIPIENT;

  if (!apiKey || !fromEmail) {
    console.error("Survey form environment variables are not configured");
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    signal: AbortSignal.timeout(10_000),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: values.email,
      subject: buildSubject(values.email),
      html: buildEmailHtml(values),
      text: buildEmailText(values),
    }),
  });

  if (!response.ok) {
    console.error("Resend survey email failed", { status: response.status });
    return false;
  }

  return true;
};

export const actions: Actions = {
  default: async ({ getClientAddress, platform, request, url }) => {
    if (!hasTrustedOrigin(request, url)) {
      return fail(403, { error: genericError });
    }

    const clientAddress = getClientAddress();
    const cloudflareRateLimited = await isCloudflareRateLimited(platform, clientAddress);

    if (cloudflareRateLimited ?? isRateLimited(clientAddress)) {
      return fail(429, {
        error: "Too many submissions. Please wait a few minutes and try again.",
      });
    }

    const data = await request.formData();
    const values = readSurveyValues(data);

    if (getString(data, "website")) {
      return { message: successMessage };
    }

    const validationError = validateSurveyValues(values);

    if (validationError) {
      return fail(400, { error: validationError, values });
    }

    try {
      const sent = await sendSurveyEmail(values);

      if (!sent) {
        return fail(500, { error: genericError, values });
      }

      return { message: successMessage };
    } catch (error) {
      console.error("Survey form error", error);
      return fail(500, { error: genericError, values });
    }
  },
};

import { env } from "$env/dynamic/private";
import { fail, type Actions } from "@sveltejs/kit";

export const prerender = false;

const CONTACT_RECIPIENT = "info@omniwerx.io";
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 4000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const engagementLabels = {
  "not-sure": "Not sure yet",
  audit: "Audit",
  project: "Project",
  retainer: "Retainer",
} as const;

type Engagement = keyof typeof engagementLabels;

type ContactValues = {
  name: string;
  email: string;
  engagement: Engagement;
  message: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const attempts = new Map<string, RateLimitEntry>();

const successMessage = "Thanks for reaching out! We'll be in touch soon.";
const genericError =
  "Failed to send message. Please try again or email us directly at info@omniwerx.io.";

const isEngagement = (value: string): value is Engagement => value in engagementLabels;

const getString = (data: FormData, key: string) => {
  const value = data.get(key);

  return typeof value === "string" ? value.trim() : "";
};

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

const readContactValues = (data: FormData): ContactValues => {
  const engagement = getString(data, "engagement");

  return {
    name: getString(data, "name"),
    email: getString(data, "email").toLowerCase(),
    engagement: isEngagement(engagement) ? engagement : "not-sure",
    message: getString(data, "message"),
  };
};

const validateContactValues = (values: ContactValues) => {
  if (!values.name || !values.email || !values.message) {
    return "Name, email, and message are required.";
  }

  if (values.name.length > MAX_NAME_LENGTH) {
    return `Name must be ${MAX_NAME_LENGTH} characters or fewer.`;
  }

  if (values.email.length > MAX_EMAIL_LENGTH) {
    return "Email must be 254 characters or fewer.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return "Please provide a valid email address.";
  }

  if (values.message.length > MAX_MESSAGE_LENGTH) {
    return `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`;
  }

  return null;
};

const buildEmailHtml = (values: ContactValues) => `
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${escapeHtml(values.name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
  <p><strong>Engagement:</strong> ${escapeHtml(engagementLabels[values.engagement])}</p>
  <p><strong>Message:</strong></p>
  <p>${escapeHtml(values.message).replaceAll("\n", "<br>")}</p>
`;

const buildEmailText = (values: ContactValues) => `New Contact Form Submission

Name: ${values.name}
Email: ${values.email}
Engagement: ${engagementLabels[values.engagement]}

Message:
${values.message}`;

const buildSubject = (name: string) =>
  `New Contact Form Submission from ${name.replace(/[\r\n]+/g, " ").slice(0, MAX_NAME_LENGTH)}`;

const sendContactEmail = async (values: ContactValues) => {
  const apiKey = env.RESEND_API_KEY;
  const fromEmail = env.RESEND_FROM_EMAIL;
  const toEmail = env.RESEND_TO_EMAIL || CONTACT_RECIPIENT;

  if (!apiKey || !fromEmail) {
    console.error("Contact form environment variables are not configured");
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: values.email,
      subject: buildSubject(values.name),
      html: buildEmailHtml(values),
      text: buildEmailText(values),
    }),
  });

  if (!response.ok) {
    console.error("Resend contact email failed", { status: response.status });
    return false;
  }

  return true;
};

export const actions: Actions = {
  default: async ({ getClientAddress, request, url }) => {
    if (!hasTrustedOrigin(request, url)) {
      return fail(403, { error: genericError });
    }

    const data = await request.formData();
    const values = readContactValues(data);

    if (getString(data, "website")) {
      return { message: successMessage };
    }

    const validationError = validateContactValues(values);

    if (validationError) {
      return fail(400, { error: validationError, values });
    }

    if (isRateLimited(getClientAddress())) {
      return fail(429, {
        error: "Too many submissions. Please wait a few minutes and try again.",
        values,
      });
    }

    try {
      const sent = await sendContactEmail(values);

      if (!sent) {
        return fail(500, { error: genericError, values });
      }

      return { message: successMessage };
    } catch (error) {
      console.error("Contact form error", error);
      return fail(500, { error: genericError, values });
    }
  },
};

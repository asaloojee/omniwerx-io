 # Direct request without browser font metadata
   curl -I "https://omniwerx.io/fonts/soehne-buch.woff2"

   # Cross-site request
   curl -I "https://omniwerx.io/fonts/soehne-buch.woff2" \
     -H "Sec-Fetch-Site: cross-site" \
     -H "Sec-Fetch-Dest: font" \
     -H "Origin: https://example.com"

   # Unknown file
   curl -I "https://omniwerx.io/fonts/unknown.woff2" \
     -H "Sec-Fetch-Site: same-origin" \
     -H "Sec-Fetch-Dest: font" \
     -H "Origin: https://omniwerx.io" \
     -H "Referer: https://omniwerx.io/"

   # Disallowed method
   curl -X POST -I "https://omniwerx.io/fonts/soehne-buch.woff2"

# Secority Headers

## Content-Service-Policy

CSP is now added and validated for syntax in Netlify config. Next, I’ll summarize what this policy permits/blocks and the hardening steps to move from this starter policy to a stricter one.

Implemented first-pass CSP in Netlify headers.

Change made:

- Added Content Security Policy to netlify.toml:26

What this CSP now does:

- Blocks high-risk vectors:
    - object-src none
    - frame-ancestors none
    - base-uri self
    - form-action self
- Allows required production resources:
    - Scripts: self + plausible.io (+ unsafe-inline for your current inline initialization script)
    - Connections: self + plausible.io
    - Images: self + data: + res.cloudinary.com
    - Styles: self + unsafe-inline (needed because you use inline style attributes in image macro)
    - Fonts: self + data:
    - Media: self + dropbox domains for tune links
    - Manifest: self

## X-Content-Type-Options

Added X-Content-Type-Options successfully.

Updated:

netlify.toml:21
netlify.toml:27
What was added:

X-Content-Type-Options = "nosniff" under /assets/*
X-Content-Type-Options = "nosniff" under /*
Why both:

Ensures MIME sniffing is disabled for both static assets and HTML/document routes.


## HSTS

HSTS is active in production; I’ll add the same header explicitly in your config so it’s version-controlled and not dependent on defaults.

Correct, that result means your live site already sends HSTS.

I’ve now made it explicit in repo config so it’s controlled by your codebase too:

Added Strict-Transport-Security = "max-age=31536000" in netlify.toml:28
Why this is good:

Keeps behavior predictable across environments/platform changes.
Makes security header policy auditable in git.


## Referrer-Policy

Added Referrer-Policy to your global headers.

Updated:

netlify.toml:29
Value set:

Referrer-Policy = "strict-origin-when-cross-origin"
Why this is a good default:

Keeps full referrer on same-origin navigations.
Sends only origin (not full path/query) on cross-origin HTTPS requests.
Avoids breaking common analytics/use-cases while improving privacy.


## Permissions-Policy

Added a conservative Permissions-Policy baseline.

Updated:

netlify.toml
Header added on /*:

Permissions-Policy = "accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), clipboard-read=(), clipboard-write=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(self), gamepad=(), geolocation=(), gyroscope=(), hid=(), idle-detection=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), usb=(), web-share=(), xr-spatial-tracking=()"
Result:

Config validates with no errors.
Most powerful browser features are disabled by default.
fullscreen is kept for same-origin only.


## Suggested next steps

1. Deploy and re-run securityheaders.com to confirm CSP is detected and effective.
2. Move toward stricter CSP by removing inline script in base.njk:44, then drop unsafe-inline from script-src.
3. Replace inline style attributes in image.njk:69 and image.njk:82, then remove unsafe-inline from style-src.
4. Add CSP reporting endpoint (report-to / report-uri) for safe tightening over time.
5. Upgrade to max-age=31536000; includeSubDomains; preload only when you are sure every present/future subdomain is HTTPS-only.
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
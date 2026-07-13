<p align="right">
  <a href="./README.md"><kbd>中文</kbd></a>
  <a href="./README.en.md"><kbd>English</kbd></a>
</p>

# Iris Frontend

This is the public Web frontend repository for Iris AI Companion.

Public URL:

```text
https://zhiyu-ning.github.io/iris
```

This repository contains only static frontend assets:

- HTML / CSS / JavaScript
- PWA manifest and service worker
- Iris brand icons
- Public runtime config in `public-config.js`

It does not contain, and must never contain:

- API keys or model credentials
- Server passwords
- Private prompts
- Chat history
- Long-term memory
- PDF or uploaded file contents
- Databases or runtime logs
- Jarvis/Iris Backend source code

Current backend origin:

```text
https://jarvis-alpha.tail36770b.ts.net
```

The browser calls `/client/v1/*`, `/voice/tts`, and `/voice/ws` on that backend. Users sign in through GitHub OAuth; the private backend checks `IRIS_GITHUB_ALLOWED_USERS` before minting a short-lived Iris session token. The browser stores that token only in the current session, and it is not committed to this repository.

This repository is generated from the main project and does not maintain backend logic.

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

The browser calls `/client/v1/*`, `/voice/tts`, and `/voice/ws` on that backend. Users manually enter the access key; the frontend sends it only to the private backend `/voice/session-token` to exchange for a short-lived Iris session token. The browser stores only the short-lived token in the current session, and it is not committed to this repository. The long-lived access key should be configured as `IRIS_ACCESS_KEY` in the private backend `.env`; legacy `JARVIS_API_TOKEN` is only a compatibility fallback and must never be stored in the Pages repository or frontend source.

This repository is generated from the main project and does not maintain backend logic.

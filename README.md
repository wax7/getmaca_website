
# Multilingual Marketing Website

Dieses Repo ist jetzt die primäre Quelle fuer die Website. Figma wird nicht mehr als laufende Sync-Quelle verwendet.

## Lokale Entwicklung

- `npm ci --legacy-peer-deps`
- `npm run dev`
- Browser: `http://localhost:3000/en`

## Build

- `npm run build`

## VS Code

- Dev-Task: `Website: Dev Server`
- Build-Task: `Website: Build`
- Browser-Launch: `Website im Browser öffnen`
- Multi-Root-Workspace: `maca-website.code-workspace`

## GitHub

- Bearbeite die Website direkt in diesem Repo.
- Pushes nach `main` starten keinen GitHub-Docker-Build mehr automatisch.
- Deployment erfolgt lokal ueber `./scripts/build-and-push.sh` und optionalem GHCR-Push.
- Der alte Figma-Sync wurde entfernt.

## Docker Deployment

- Lokaler Test-Build: `./scripts/build-and-push.sh test`
- Produktions-Push: `./scripts/build-and-push.sh v1.0.0`
- Beim Push baut das Script ein Multi-Arch-Image fuer `linux/amd64` und `linux/arm64`.
- Das GitHub-Workflow unter `.github/workflows/deploy.yml` bleibt nur als manueller Fallback erhalten.
  
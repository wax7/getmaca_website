# ── Stage 1: Build ──────────────────────────────────────────
FROM node:20-alpine AS build

WORKDIR /app

# Erst nur package-Dateien kopieren → Docker cacht node_modules
COPY package.json ./
# Falls ein Lockfile existiert, wird es mitgenommen
COPY package-lock.json* yarn.lock* pnpm-lock.yaml* ./

RUN npm install --frozen-lockfile 2>/dev/null || npm install

# Dann den Rest kopieren und bauen
COPY . .
RUN npm run build

# ── Stage 2: Production (Nginx) ────────────────────────────
FROM nginx:1.27-alpine

LABEL maintainer="wax7"
LABEL description="GetMaca Website – getmaca.de"
LABEL org.opencontainers.image.source="https://github.com/wax7/Multilingualmarketingwebsite"

# Nginx-Konfiguration
COPY nginx/nginx.conf  /etc/nginx/nginx.conf
COPY nginx/conf.d/     /etc/nginx/conf.d/

# Statische Build-Artefakte aus Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Log-Verzeichnis vorbereiten (wird zur Laufzeit per Volume überschrieben)
RUN mkdir -p /var/log/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    nginx -t

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]

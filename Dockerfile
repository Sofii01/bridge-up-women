# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@11.6.2 && \
    npm ci

COPY . .

ARG SHEETS_URL=""

RUN npm run build && \
    find /app/dist -name "*.js" -exec sed -i "s|__SHEETS_URL_PLACEHOLDER__|${SHEETS_URL}|g" {} \;

# ── Stage 2: Serve ────────────────────────────────────────────────────────────
FROM nginx:alpine

COPY --from=builder /app/dist/bridge-up-women/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

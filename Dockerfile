# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@11.6.2 && \
    npm ci

COPY . .

ARG SHEETS_URL=""
ENV SHEETS_URL=$SHEETS_URL

RUN npx ng build --configuration=production \
    --define="__SHEETS_URL__=\"$SHEETS_URL\""

FROM nginx:alpine

COPY --from=builder /app/dist/bridge-up-women/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

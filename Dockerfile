# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@11.6.2 && \
    npm ci

COPY . .

ARG SHEETS_URL=""
ARG INSCRIPCION_URL=""
ENV SHEETS_URL=$SHEETS_URL
ENV INSCRIPCION_URL=$INSCRIPCION_URL

RUN echo ">>> SHEETS_URL en build time: $SHEETS_URL"
RUN echo ">>> INSCRIPCION_URL en build time: $INSCRIPCION_URL"

RUN npx ng build --configuration=production \
    --define="__SHEETS_URL__=\"$SHEETS_URL\"" \
    --define="__INSCRIPCION_URL__=\"$INSCRIPCION_URL\""

FROM nginx:alpine

COPY --from=builder /app/dist/bridge-up-women/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

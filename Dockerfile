# Multi-stage Dockerfile for Nuxt frontend and Node backend
FROM node:18-alpine as base
WORKDIR /app

# --- Backend build ---
FROM base as backend
WORKDIR /app/backend
COPY backend ./
RUN npm install

# --- Frontend build ---
FROM base as frontend
WORKDIR /app/frontend
COPY frontend ./
RUN npm install && npm run build

# --- Final image ---
FROM node:18-alpine
WORKDIR /app
COPY --from=backend /app/backend ./backend
COPY --from=frontend /app/frontend ./frontend
EXPOSE 3000 3001
CMD ["sh", "-c", "node backend/index.js & cd frontend && npx nuxt start"]

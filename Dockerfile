FROM node:22-alpine AS base

WORKDIR /app

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@10 --activate

# Only install production deps for runtime image
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Copy the rest of the application
COPY . .

EXPOSE 8080
CMD ["node", "index.js"]


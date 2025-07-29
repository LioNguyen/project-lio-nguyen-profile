# Multi-stage Docker build for React/Vite application

# Stage 1: Build stage
FROM node:20-alpine AS builder

# Install bun
RUN npm install -g bun

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Stage 2: Production stage using Vite preview
FROM node:20-alpine AS production

# Install bun
RUN npm install -g bun

WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./

# Install only production dependencies and vite for preview
RUN bun install --production --frozen-lockfile && bun add vite

# Copy built application and necessary config files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/vite.config.ts ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/tsconfig.node.json ./

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Change ownership of the app directory
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port 5173
EXPOSE 5173

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5173 || exit 1

# Start the application using vite preview
CMD ["bun", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]

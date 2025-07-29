#!/bin/bash

# Deployment script for Lio Nguyen Portfolio

set -e

echo "🚀 Starting deployment of Lio Nguyen Portfolio..."

# Build the Docker image
echo "📦 Building Docker image..."
echo "ℹ️  Using improved Dockerfile with better Bun compatibility for different architectures"
docker build -t lio-portfolio:latest .

# Stop and remove existing container if it exists
echo "🛑 Stopping existing container..."
docker stop lio-portfolio 2>/dev/null || true
docker rm lio-portfolio 2>/dev/null || true

# Run the new container
echo "🏃 Starting new container..."
docker run -d \
  --name lio-portfolio \
  --restart unless-stopped \
  -p 5173:5173 \
  --health-cmd="wget --no-verbose --tries=1 --spider http://localhost:5173 || exit 1" \
  --health-interval=30s \
  --health-timeout=10s \
  --health-retries=3 \
  --health-start-period=40s \
  lio-portfolio:latest

echo "✅ Deployment completed!"
echo "🌐 Your portfolio is now available at: http://localhost:5173"
echo "📊 Check container status: docker ps"
echo "📋 View logs: docker logs lio-portfolio"
echo "🛑 Stop container: docker stop lio-portfolio"

echo ""
echo "💡 If you encounter issues on ARM64/Synology NAS:"
echo "   You can try the fallback version with:"
echo "   docker build -f Dockerfile.fallback -t lio-portfolio:latest ."

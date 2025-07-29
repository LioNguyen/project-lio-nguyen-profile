# Docker Deployment Guide

This document provides instructions for deploying the Lio Nguyen Portfolio application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for orchestrated deployment)

## Quick Start

### Method 1: Using the Deployment Script (Recommended)

The easiest way to deploy the application is using the provided deployment script:

```bash
./deploy.sh
```

This script will:

- Build the Docker image
- Stop any existing container
- Start a new container with health checks
- Display useful commands for monitoring

### Method 2: Using Docker Commands

If you prefer manual control, you can use these Docker commands:

```bash
# Build the image
docker build -t lio-portfolio:latest .

# Run the container
docker run -d \
  --name lio-portfolio \
  --restart unless-stopped \
  -p 5173:5173 \
  lio-portfolio:latest
```

### Method 3: Using Docker Compose

For a more orchestrated approach:

```bash
# Start the application
docker-compose up -d

# Stop the application
docker-compose down
```

## Accessing the Application

Once deployed, your portfolio will be available at:

- **Local**: http://localhost:5173
- **Network**: The application is accessible from other devices on your network

## Monitoring and Management

### Check Container Status

```bash
docker ps
```

### View Application Logs

```bash
docker logs lio-portfolio
```

### Check Health Status

```bash
docker inspect lio-portfolio --format='{{.State.Health.Status}}'
```

### Stop the Application

```bash
docker stop lio-portfolio
```

### Remove the Container

```bash
docker rm lio-portfolio
```

## Docker Image Details

### Multi-Stage Build

The Dockerfile uses a multi-stage build approach:

1. **Builder Stage**: Uses Node.js 18 Alpine to build the application
2. **Production Stage**: Creates a lightweight production image with only necessary files

### Security Features

- Runs as a non-root user (`nextjs`) for enhanced security
- Uses Alpine Linux for a minimal attack surface
- Only includes production dependencies in the final image

### Health Checks

The container includes built-in health checks that verify the application is responding correctly:

- **Interval**: 30 seconds
- **Timeout**: 3 seconds
- **Retries**: 3 attempts
- **Start Period**: 5 seconds

## Configuration

### Environment Variables

The application supports the following environment variables:

- `NODE_ENV`: Set to "production" in Docker deployment
- `PORT`: Application port (default: 5173)

### Port Configuration

The application is configured to run on port 5173 by default. This is set in:

- `vite.config.ts` - Vite preview and server configuration
- `Dockerfile` - Container exposure
- `docker-compose.yml` - Port mapping

## Troubleshooting

### Container Won't Start

1. Check if port 5173 is already in use:

   ```bash
   lsof -i :5173
   ```

2. View container logs for errors:
   ```bash
   docker logs lio-portfolio
   ```

### Application Not Accessible

1. Verify the container is running:

   ```bash
   docker ps | grep lio-portfolio
   ```

2. Check health status:

   ```bash
   docker inspect lio-portfolio --format='{{.State.Health.Status}}'
   ```

3. Test local connectivity:
   ```bash
   curl -I http://localhost:5173
   ```

### Build Issues

1. Ensure all dependencies are properly listed in `package.json`
2. Check that the build process completes successfully:
   ```bash
   npm run build
   ```

## File Structure

The Docker deployment includes these key files:

- `Dockerfile` - Multi-stage container definition
- `docker-compose.yml` - Orchestration configuration
- `deploy.sh` - Automated deployment script
- `.dockerignore` - Build context optimization
- `nginx.conf` - Alternative nginx configuration (if needed)

## Performance Optimization

The Docker setup includes several optimizations:

- **Multi-stage build** reduces final image size
- **Layer caching** speeds up subsequent builds
- **Minimal base image** (Alpine Linux) for security and size
- **Health checks** ensure application reliability
- **Restart policies** for automatic recovery

## Alternative Nginx Deployment

An nginx configuration is also provided for static file serving. To use nginx instead of Vite preview, modify the Dockerfile to use the nginx stage:

```bash
docker build -t lio-portfolio:nginx --target nginx .
```

This approach is more suitable for high-traffic production deployments.

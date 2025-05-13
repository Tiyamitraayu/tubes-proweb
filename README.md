# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Docker Setup

This project is containerized using Docker for easy development and deployment.

### Development Environment

To start the development environment:

```bash
# Start all services in development mode
docker-compose -f docker-compose.dev.yml up

# Start specific services
docker-compose -f docker-compose.dev.yml up frontend backend
```

### Production Build

For production deployment:

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f
```

### Container Management

```bash
# Stop all containers
docker-compose down

# Remove volumes (will delete database data)
docker-compose down -v

# Rebuild containers after changes
docker-compose build
```

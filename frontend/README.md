# 🚀 Frontend - Fire Incidents Web

This proyect is the **frontend** for the fire incident API.
It is build in **React**, **Vite**, and uses **TypeScript**

## Quick Start

1. Install dependencies

   ```bash
   cd frontend
    npm install
    npm run dev
   ```

   This project is configured and prepared to be executed in a Docker container.
   In the root of the project run the following

   ```bash
   docker compose build
   docker compose up
   ```

2. Structure
   ```
   frontend/
   ├── src/
   │ ├── components/ # Reusable UI components
   │ ├── assets/ # Utilities as media
   │ ├── types/ # Interfaces for components
   │ └── App.tsx # App entrypoint
   ├── package.json
   ├── tsconfig.json
   ├── vite.config.ts
   └── Dockerfile
   ```


## Tech Stack
- React 19 – UI library
- Vite – Dev/build tool
- TypeScript – Static typing
- Material UI (MUI) – Component library
- ESLint + Prettier – Linting and formatting
- Docker – Containerized development

### Tiny architecture sketch:
The app provides a form to submit new incidents and a dashboard to list them in reverse chronological order. State and API calls are kept simple, with minimal abstraction, given project scope.

## Tradeoffs & Assumptions
- Used Material UI instead of Tailwind for faster styled components → less flexibility in custom design, but faster delivery.
- Navigation is implemented without react-router-dom → simpler for 2 pages, but less scalable.
- No state management library (like Redux) → React hooks are enough for this scale.
- Images are fetched directly from backend static /uploads/ folder (no CDN).

## What’s done vs. what I’d add with more time
### Done

- Incident submission form (controlled with MUI components).
- Incident list with reverse chronological order.
- Dockerized frontend + integration with backend API.
- ESLint + Prettier setup for consistent code style.


### With more time, I’d add

- Authentication + protected routes.
- More polished error handling and loading states.
- Unit tests (React Testing Library + Vitest).
- Better API abstraction (React Query or SWR).
- Responsive UI polish and accessibility improvements.


## AI
### I used AI to:

- Draft and refine this README.md structure
- Generate initial .gitignore and docker-compose.yml optimizations
- Cursor for accelerate the development process and chatGPT to research for recommendations and libraries to use

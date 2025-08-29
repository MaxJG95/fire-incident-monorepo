## 🔥 Fire Incidents Monorepo

This repository is a monorepo that contains both the backend (REST API) and frontend (React web dashboard) for the Fire Incidents project.
The backend provides APIs to record and retrieve fire-related incidents, while the frontend displays them in a dashboard with image support and  ordering.

### Backend: Node.js, Express, SQLite, Multer (image uploads)
### Frontend: React (Vite + TypeScript), Material UI, TailwindCSS
### Infrastructure: Docker, docker-compose

- The backend exposes REST endpoints to create and list incidents.
- Each incident has: title, description, incident_type, location, image, and createdAt.
- Incidents are stored in SQLite for persistence.
- The frontend consumes these APIs and displays incidents in a dashboard (reverse chronological order).
- Images are stored locally in /uploads and served via Express.

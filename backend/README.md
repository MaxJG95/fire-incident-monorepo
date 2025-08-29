# 🔥 Backend - Fire Incidents API

This proyect is the **backend** for the incident web portal.
It is build in **Node.js**, **Express**, and uses **SQLite** (trough [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)) as a local database.

## Quick Start

1. Install dependencies

   ```bash
   cd backend
    npm install
    npm start
   ```

   This project is configured and prepared to be executed in a Docker container.
   In the root of the project run the following

   ```bash
   docker compose build
   docker compose up
   ```

2. Structure
   
   ```
   backend/
   │── db/ # Configuration and access to the SQLite db
   │── routes/ # Endpoints to the API
   │── models/ # SQL queries (Data access layer)
   │── uploads/ # Files upload via Multer
   │── controllers/ # Logic handlers for routes
   │── server.js # Entry point of the server
   │── package.json
   
   ```

## Tech Stack

- [Node.js](https://nodejs.org/) v20
- [Express](https://expressjs.com/) ^5.1.0
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) (SQLite)
- [Multer](https://github.com/expressjs/multer) (file upload)
- [CORS](https://github.com/expressjs/cors)
- [Jest](https://jestjs.io/) + [Supertest](https://github.com/visionmedia/supertest) (testing)

## Tradeoffs & Assumptions

- SQLite chosen for simplicity and portability (easy local dev, no external DB needed).
Tradeoff: not ideal for horizontal scaling or heavy concurrent writes.

- File uploads are stored locally in /uploads/ instead of cloud storage (simpler setup, but less scalable).

- Authentication for protected route is a simulation of what is needed in real life 


## What’s done vs. what I’d add with more time
### Done

- Basic GET and POST APIs for incidents
- File upload (images) via Multer
- Local SQLite database with schema + migrations
- Dockerized setup with docker-compose
- Dev environment ready to be scalable

### With more time, I’d add:

- Microservices Architecture for auth, incidents, media, etc. 
- Authentication & authorization (JWT)
- Cloud storage integration for file uploads (e.g. S3)
- Swagger/OpenAPI documentation
- CI/CD pipeline with automated tests
- Deployment to a cloud provider (Render, Railway, or AWS)
- Data validation with a library like zod or joi


## AI 
### I used AI to:

- Draft and refine this README.md structure
- Debug Docker issues with better-sqlite3 on Alpine
- Generate initial .gitignore and docker-compose.yml optimizations
- Cursor for accelerate the development process and chatGPT to research for recommendations and libraries to use



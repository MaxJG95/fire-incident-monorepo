# Incident Management Monorepo

This repository contains both the **frontend** (React + Vite + MUI) and the **backend** implementations:
- `backend` → Node.js/Express API  
- `backend-go` → Golang API (Gin + GORM + SQLite)  
- `frontend` → React client  

## 🚀 Features
- Incident reporting with title, description, type, location, and optional image upload.  
- File storage handled in `/uploads`.  
- SQLite database with GORM migrations.  
- RESTful API endpoints.  
- Docker + Docker Compose setup for full stack development.

## 📦 Requirements
- [Docker](https://docs.docker.com/get-docker/)  
- [Docker Compose](https://docs.docker.com/compose/install/)  

## 🛠️ Running with Docker

```bash
docker compose build
docker compose up -d

  ```
      /monorepo
      ├── backend/        # Node.js backend (optional)
      ├── backend-go/     # Golang backend
      ├── frontend/       # React frontend
      ├── docker-compose.yml
      ├── README.md
      └── .gitignore
   ```
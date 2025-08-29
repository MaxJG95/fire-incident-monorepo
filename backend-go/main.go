package main

import (
	"backend-go/database"
	"backend-go/routes"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize DB
	database.ConnectDB()

	// Init Gin
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Serve static files (images in /uploads)
	r.Static("/uploads", "./uploads")

	// Routes
	routes.RegisterIncidentRoutes(r)

	// Start server
	r.Run(":4001")
}

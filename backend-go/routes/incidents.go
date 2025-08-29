package routes

import (
	"backend-go/database"
	"backend-go/models"
	"net/http"
	"path/filepath"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func RegisterIncidentRoutes(r *gin.Engine) {
	r.GET("/incidents", GetIncidents)
	r.POST("/incidents", CreateIncident)
}

// Get all incidents
func GetIncidents(c *gin.Context) {
	var incidents []models.Incident
	database.DB.Order("created_at desc").Find(&incidents)
	c.JSON(http.StatusOK, incidents)
}

// Create new incident
func CreateIncident(c *gin.Context) {
	title := c.PostForm("title")
	description := c.PostForm("description")
	incidentType := c.PostForm("incident_type")
	location := c.PostForm("location")

	// Handle file upload
	file, err := c.FormFile("image")
	var imagePath string
	if err == nil {
		// Save file with unique name
		filename := uuid.New().String() + filepath.Ext(file.Filename)
		imagePath = "./uploads/" + filename
		c.SaveUploadedFile(file, imagePath)
	}

	incident := models.Incident{
		Title:        title,
		Description:  description,
		IncidentType: incidentType,
		Location:     location,
		Image:        imagePath,
		CreatedAt:    time.Now(),
	}

	database.DB.Create(&incident)
	c.JSON(http.StatusCreated, incident)
}

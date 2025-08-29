package models

import "time"

type Incident struct {
	ID           uint      `gorm:"primaryKey" json:"id"`
	Title        string    `json:"title"`
	Description  string    `json:"description"`
	IncidentType string    `json:"incident_type"`
	Location     string    `json:"location"`
	Image        string    `json:"image"`
	CreatedAt    time.Time `json:"createdAt"`
}

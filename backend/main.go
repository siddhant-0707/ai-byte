package main

import (
	"ai-byte/config"
	"ai-byte/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	app := gin.Default()

	// Configure CORS to allow requests from http://localhost:3000
	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"http://localhost:3000"}
	app.Use(cors.New(corsConfig))

	config.ConnectDB()

	routes.SetupRoutes(app)
	err := app.Run()
	if err != nil {
		return
	}
}

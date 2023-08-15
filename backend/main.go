package main

import (
	"ai-byte/config"
	"ai-byte/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	app := gin.Default()

	config.ConnectDB()

	routes.SetupRoutes(app)
	err := app.Run()
	if err != nil {
		return
	}
}

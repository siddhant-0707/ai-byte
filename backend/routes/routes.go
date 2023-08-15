package routes

import (
	"ai-byte/controllers"
	"ai-byte/middleware"
	"github.com/gin-gonic/gin"
	"net/http"
)

func SetupRoutes(app *gin.Engine) {
	app.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "hello!"})
	})

	publicRoutes := app.Group("/auth")
	publicRoutes.POST("/register", controllers.CreateUser)
	publicRoutes.POST("/login", controllers.Login)

	protectedRoutes := app.Group("/api")
	protectedRoutes.Use(middleware.JWTAuthMiddleware())

	protectedRoutes.POST("/blog", controllers.AddBlog)
	protectedRoutes.GET("/blog", controllers.GetAllBlogs)
	protectedRoutes.GET("/blog/:id", controllers.GetBlogByID)

	protectedRoutes.POST("/:id/comment", controllers.AddComment)
	protectedRoutes.GET("/:id/comment", controllers.GetCommentsByBlogID)
}

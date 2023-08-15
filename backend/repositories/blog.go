package repositories

import (
	"ai-byte/models"
	"gorm.io/gorm"
)

func SaveBlog(db *gorm.DB, blog *models.Blog) (*models.Blog, error) {
	err := db.Create(blog).Error
	if err != nil {
		return nil, err
	}
	return blog, nil
}

// FindBlogByID finds a blog post by its ID
func FindBlogByID(db *gorm.DB, id uint) (models.Blog, error) {
	var blog models.Blog
	err := db.First(&blog, id).Error
	return blog, err
}

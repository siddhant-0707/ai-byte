package controllers

import (
	"context"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/sashabaranov/go-openai"
	"net/http"
	"strings"
)

func GetPath(c *gin.Context) {
	client := openai.NewClient("OPENAI_KEY")
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role: openai.ChatMessageRoleUser,
					Content: "Generate 10 basic questions which can be answered in one to two words. The question can" +
						"can be related to NLP, Computer Vision, Regression, Neural Networks, etc.",
				},
			},
		},
	)

	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return
	}

	questions := strings.Split(resp.Choices[0].Message.Content, "\n")
	c.JSON(http.StatusOK, gin.H{
		"gpt-reply": questions,
	})
	return
}

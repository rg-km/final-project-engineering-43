package main

import (
	"database/sql"
	"final-project-engineering-43/api"
	"final-project-engineering-43/repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "db/course.db")
	if err != nil {
		panic(err)
	}

	userRepo := repository.NewUserRepository(db)
	mainAPI := api.NewAPI(*userRepo)
	mainAPI.Start()
}

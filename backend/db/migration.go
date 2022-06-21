package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "course.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS user (
		id  integer not null primary key  AUTOINCREMENT,
		username varchar(255),
		password varchar(255),
		email varchar(255),
		[role] nvarchar (255) NOT NULL CHECK ([role] IN('admin', 'user')) DEFAULT 'user'
	  );

	  INSERT INTO user VALUES (1,"Dika","12345","dika@rg.com",'admin'),(2,"Ririn","12345","ririn@rg.com",'admin'),(3,"Vina","12345","vina@student.com",'user'),(4,"Hasan","12345","hasan@student.com",'user');

	CREATE TABLE IF NOT EXISTS changes (
		id integer not null primary key  AUTOINCREMENT,
		courses_id integer not null,
		user_id integer not null, 
		previousChanges TEXT,
		newChanges TEXT,
		dateChanges DATETIME,
		
		FOREIGN KEY (user_id) REFERENCES user(id),
		FOREIGN KEY (courses_id) REFERENCES pathItem(path_id)
	  );
	  
	  CREATE TABLE IF NOT EXISTS path (
		id integer not null primary key  AUTOINCREMENT,
		name varchar(255),
		description TEXT,
		imgURL varchar(255)
	  );

	  CREATE TABLE IF NOT EXISTS pathItem (
		id integer not null primary key AUTOINCREMENT,
		path_id int,
		content TEXT,
		title varchar(255)
	  );

	  CREATE TABLE IF NOT EXISTS courses (
		id integer not null primary key AUTOINCREMENT,
		content TEXT,
		title varchar(255)
	  );
	  
	  `)

	if err != nil {
		panic(err)
	}
}

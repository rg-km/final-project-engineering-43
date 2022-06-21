package repository

type User struct {
	ID       int64  `db:"id"`
	Username string `db:"username"`
	Password string `db:"password"`
	Email    string `db:"email"`
	Role     string `db:"role"`
	Token    string `db:"token"`
}

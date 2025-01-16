# User Registration Endpoint Documentation

## Endpoint: `/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data and creates a new user in the database if the data is valid.

### Request Body:

The request body should be a JSON object containing the following fields:

- `firstname`: A string with a minimum length of 3 characters.
- `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 8 characters.
- `confirmPassword`: A string with a minimum length of 8 characters.

Example:

```json
{
	"firstname": "John",
	"lastname": "Doe",
	"email": "john.doe@example.com",
	"password": "password123"
}
```

### Responses:

#### Success (201):

- **Description**: User created successfully.
- **Body**: A JSON object containing the authentication token and the user details.

```json
{
	"user": {
		"_id": "user_id",
		"firstname": "John",
		"lastname": "Doe",
		"email": "john.doe@example.com"
	},
	"token": "auth_token",
	"message": "User Created"
}
```

#### Client Error (400):

- **Description**: Invalid input data.
- **Body**: A JSON object containing the validation errors.

```json
{
	"errors": [
		{
			"msg": "Invalid Email",
			"param": "email",
			"location": "body"
		},
		{
			"msg": "First name must be at least 3 characters long",
			"param": "fullname.firstname",
			"location": "body"
		}
	],
	"message": "Invalid arguments"
}
```

#### Client Error (400):

- **Description**: Password and confirm password does not match.
- **Body**: A JSON object containing the validation errors.

```json
{
	"message": "Password do not match"
}
```

# User Login Endpoint Documentation

## Endpoint: `/login`

### Method: POST

### Description:

This endpoint is used to log in an existing user. It validates the input data and returns an authentication token if the data is valid.

### Request Body:

The request body should be a JSON object containing the following fields:

- `email`: A valid email address.
- `password`: A string.

Example:

```json
{
	"email": "john.doe@example.com",
	"password": "password123"
}
```

### Responses:

#### Success (200):

- **Description**: User logged in successfully.
- **Body**: A JSON object containing the authentication token and the user details.

```json
{
	"user": {
		"_id": "user_id",
		"firstname": "John",
		"lastname": "Doe",
		"email": "john.doe@example.com"
	},
	"token": "auth_token",
	"message": "User Login"
}
```

#### Client Error (400):

- **Description**: Invalid input data.
- **Body**: A JSON object containing the validation errors.

```json
{
	"message": "Invalid Credentials"
}
```

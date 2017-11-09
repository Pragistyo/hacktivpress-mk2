# hacktivpress-mk2
This Repository contain live-code-test for creating blog CRUD hacktiv8 (phase2)


# Prerequisite

    1. To install *dependencies*, install NPM (node package manager)

        npm : https://www.npmjs.com/get-npm

    2. You must have nodejs running in your computer (install npm first).

        nodejs: https://nodejs.org/en/download/package-manager/

# How to Run

    1. Clone this repository
    2. Go to *server* directory with terminal:

        npm install
        *node app.js* OR *nodemon app.js*

    3. Go to client directpry with terminal: 

        npm install
        npm run dev

# API
This section listed of API end point of this application

Login-Register

| Route | HTTP | Desription|
|-------|------|-----------|
| `/users/register/` | POST | Register users with username, email, password |
| `/users/login/` | POST | Signin users to application |

CRUD of blog

| Route | HTTP | Description | Data Needed |
| ----- | ---- | ----------- | --------- |
| `/article` | GET | Get all articles | none|
| `/article/:id` | GET | Get detail articles | id articles|
| `/article` | POST | Create article | token|
| `/article/:id` | PUT | Update Articles | id users, token|
| `/article/:id` | DELETE | Delete Articles | id users, token|






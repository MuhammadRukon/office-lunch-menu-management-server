## Instructions on how to run the projects


step 0: you can just copy the commands without double quotation marks to make the process faster.

step 1: open terminal and clone the repo - e.g. "git clone https://github.com/MuhammadRukon/office-lunch-menu-management-server.git"

step 2: change directory to the project direct - e.g. "cd office-lunch-menu-management-server"

step 3: open in vscode - e.g. "code ."

step 4: install node package manager and other dependencies - e.g. "npm i"

step 5: run the project - "npm run dev"


### notes

- check .exampleEnv file to create .env file
- make sure to update the .env files LOCAL_CLIENT's value with the frontend running port
- make sure to update the .env files USER's value with your username name
- make sure to update the .env files DB_PASSWORD's value with your password
- I have set it up so that the project can automatically migrate and set up the database. You do not need to create the database and tables manually.

## Technologies used


- frontend: React.js, tailwind css
- backend: Node.js with Express.js
- database: PostgreSQL


## Features

- user can register, login, login.
- everyone registering with get the employee role. only one person can become admin though web app. other can become admin by changing role in db gui only.
- admin can create lunch options
- admin can view the employees preferred lunch options
- employee can view lunch options available for current day and select them.

## DB schema

- employee choice - https://github.com/MuhammadRukon/office-lunch-menu-management-server/blob/master/src/model/employeeChoice.js
- Menu - https://github.com/MuhammadRukon/office-lunch-menu-management-server/blob/master/src/model/lunchOption.js
- user - https://github.com/MuhammadRukon/office-lunch-menu-management-server/blob/master/src/model/userModel.js

## frontend repository - https://github.com/MuhammadRukon/office-lunch-menu-management


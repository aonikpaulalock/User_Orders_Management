# User_Orders_Management Project Instructions

### How to run locally this project locally

- Go MongoDb Atlas
  https://cloud.mongodb.com/

- Create database

- Go to network > accessList > click ADD IP ADDRESS > 0.0.0.0/0 (includes your current IP address)

- Go to database > connect > drivers > copy mongodb uri == like this ( mongodb+srv://<username_Your_database>:<password_Your_database>@cluster0.j1ployz.mongodb.net/?retryWrites=true&w=majority )

### Clone Project

git clone https://github.com/aonikpaulalock/User_Orders_Management.git

### Go to the project directory

cd User_Orders_Management

### Install dependencies

npm install or i

### Setup .env File root folder

- PORT=Your_Port
- BCRYPT_SOLT_ROUNND = 10 or 12 any number
- DATABASE_URL= Your Database Uri ==> Like This => ( mongodb+srv://<Your_Databse_Username>:<Your_Database_Password>@cluster0.j1ployz.mongodb.net/Your_Collection_Name?retryWrites=true&w=majority )

### Start the server on the terminal

npm run dev

### Open your postman

## Create a user

http://localhost:<Your_Port>/api/users

### Get all users

http://localhost:<Your_Port>/api/users

### Get specific user

http://localhost:<Your_Port>/api/users/:userId

### Update specific user

http://localhost:<Your_Port>/api/users/:userId

### Delete specific a user

http://localhost:<Your_Port>/api/users/:userId

### Add new product in your order collection

http://localhost:<Your_Port>/api/users/:userId/orders

### All orders for a specific user

http://localhost:<Your_Port>/api/users/:userId/orders

### Calculate total price of orders for a specific user

http://localhost:<Your_Port>/api/users/2/orders/total-price

❤️ Happy Coding
❤️ Happy Life

```

```

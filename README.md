<p align="center">
<img alt="favicon" src="https://res.cloudinary.com/pei7pei8luobo/image/upload/v1630420930/vegetarian_gzpvzo.svg" width="200" height="200" >
</p>

# About this project
This is a simple homepage of an imagined modern american restaurant where only HTML and CSS are used with React for frontend and Node.js for backend, we have decided to create a restaurant reservation website where customers can make reservation without spending time to call restaurants. On the other hand, restaurant owners can save time to look for the availability when customers phone in, meaning they will have more time to be creative in their cuisine.

# Restaurant project - frontend
This is a restaurant reservation  website for booking a table in an imagined modern american restanrant, using React for frontend. Foodies can simply browse the menu without login and they need to register as members if they want to make a reservation or continue as guest. On the other hand, admin can manage not only bookings from the customers but also content of the menu.

# Features
* Customers can
  - browse menu
  - register, login and logout
  - check availability of a specific time and date
  - make reservation accordingly
  - pay table reservation fee once the reservation is made
  - manage their email
* Restaurant owners
  - also have the above features
  - can edit or delete existing bookings
  - can create, edit and delete items in the menu

# Technology used

* HTML and CSS
* React //frontend environment
* Node.js // Backend environment
* Express // Fast and minimalist framework for Node.js to create APIs
* MySQL // Storing data including information about users, reservation and menu
* Sequelize // Using ORM to manage database like managing objects in JavaScript
* Sequelize-cli // Creating models easily with migration
* bcrypt // Hashing password and password authentication
* jsonwebtoken // User authentication using RSA
* multer // A middlewear for handling file upload
* cloudinary // A cloud service offering API for image management
* Stripe // An API handling payment made from customers


# Installing
1. Clone this repository
```javascript
git clone https://github.com/lanru2001/restaurant-reservation-project-1.git
```

2.Install packages
```javascript
# NPM, Node and Yarn dependencies to run Javascript framework application (React JS and NodeJs
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install NVM LTS:
nvm install 16

# Specify  the Node Version Manager
nvm use 16

# Verify the Node.js version:
node -v

# Verify npm version:
npm -v # Should print "10.9.2".
```

3.Run this project locally
```javascript
# Added yarn dev to start both frontend from  node_modules
yarn install && yarn dev
#yarn start
```
4.Frontend URL
   ```javascript
    BASE_URL: localhost:3000  //https://group-five-frontend-software-engineering.com
   ```
Note: The version of node the application was written is v17.

# Restaurant project - backend
This is a restaurant reservation website for booking a table in an imagined modern american restanrant using nodejs for backend.

# Features
1. BASE_URL: localhost:5000  //https://group-five-backend-software-engineering.com

* User Authentication
  * get/getme // Verify the users with JWT
  * post/register // Register
  * post/login // Login
  
* Product
  * get/product/:type // Get items from database according to the choosen type
  * post/product // Create new items in the menu
  * delete/product/:id // Delete items based on id of items
  * put/product/update/:id // Update items's information (include file) based on id of items
  * patch/product/updatetext/:id // Update items's information (does NOT include file) based on id of items

* Reservation
  * get/reserve/:date // Get booking information according to the choosen date
  * post/reserve // Create new reservation
  * post/payment// Use Stripe API to create payment-related data made by customers
  * get/userbooking/:username // Get specific booking history according to the users logged in
  * get/userinfo/:username // Get specific user information according to the users logged in
  * patch/updatemail/:id // Update email according to the users logged in
  * patch/ispaid/:id // Update payment status once payment is made successfully via Stripe API
  * delete/cancel/:id // Delete existing booking according to the id choosen
  * patch//update/:id // Update existing booking according to the id choosen

2.Install packages
```javascript
npm install
```

3.Run backend project locally from backend folder 
```javascript
node index.js
```
# Restaurant project - Database
```bash
# Install MySQL Server (and client)
brew install mysql
brew services start mysql

# Log Into the MySQL Client
mysql -u root -p  //provide the password

# CREATE DATABASE
CREATE DATABASE restaurantsqlz;

# Use sequelize migration files to create the tables in restaurantsqlz database
npm install --save-dev sequelize-cli // download sequelize-cli
npx sequelize-cli db:migrate --to 20210602100636-create-user.js
npx sequelize-cli db:migrate --to 20210602100853-create-product.js
npx sequelize-cli db:migrate --to 20210602100953-create-reservation.js

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| restaurantsqlz     |
| sys                |
+--------------------+

mysql> SHOW TABLES;
+--------------------------+
| Tables_in_restaurantsqlz |
+--------------------------+
| Products                 |
| Reservations             |
| SequelizeMeta            |
| Users                    |
+--------------------------+

mysql> SELECT * FROM Users;
+----+---------------+----------------------------+--------------------------------------------------------------+---------------------+---------------------+
| id | username      | email                      | password                                                     | createdAt           | updatedAt           |
+----+---------------+----------------------------+--------------------------------------------------------------+---------------------+---------------------+
|  1 | azeez         | lanru2001@yahoo.com        | $2b$10$aqDVNqZwyIRapO9wIZXzZeeNKUHbzSOC7D1TUTmhKgyOO4sg4QkP. | 2025-05-10 02:58:16 | 2025-05-10 02:58:16 |
|  2 | erika         | erikawalker21@yahoo.com    | $2b$10$KUsYMiI64xWg7KUxWmRbKOjoxw/6r0BhzivGMJo9VesYqfID0H1IC | 2025-05-10 16:09:38 | 2025-05-10 16:09:38 |
|  3 | tope          | lanretemitope7@gmail.com   | $2b$10$LUW/2DszE406A7pRBcmFpetbibHDBRB.lrJioaGHJAyJt96wCiy9y | 2025-05-10 16:11:45 | 2025-05-10 16:11:45 |
|  4 | chloe         | chloe123@yahoo.com         | $2b$10$nK9nZ9vk6JXW0RCm6akTlu56L0mViUMSlV51x0sBToFvOsXO7zMqC | 2025-05-10 21:41:07 | 2025-05-10 21:41:07 |
|  5 | donald_trump  | donald_trump@yahoo.com     | $2b$10$dXnQIDt2KslqmJVwpmywneV0C6TIrennoiBzALMtCc0wZ1wh9q6We | 2025-05-11 01:50:43 | 2025-05-11 01:50:43 |
|  6 | mikejohns2025 | mikejohns@yahoo.com        | $2b$10$9et7bcZO0nES2uFvB4voDOIplpmJWN7E/eZzaYi/sSvovoOwpPU9S | 2025-05-11 02:38:05 | 2025-05-11 02:38:05 |
|  7 | bolade        | azolanrewaju2024@yahoo.com | $2b$10$0JOk.eW0ktO6u.4Jx6sU1.5x4EqYGynwM7YZ7muW0hJUA1iXP8QPS | 2025-05-11 03:28:38 | 2025-05-11 03:28:38 |
+----+---------------+----------------------------+--------------------------------------------------------------+---------------------+---------------------+

```

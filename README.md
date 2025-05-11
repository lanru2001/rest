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
This is an SPA website for booking a table in an imagined vegan restanrant, using React as frontend and Node.js as backend. Foodies can simply browse the menu without login and they need to register as members if they want to make a reservation. On the other hand, admin can manage not only bookings from the customers but also content of the menu.

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

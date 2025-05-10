<p align="center">
<img alt="favicon" src="https://res.cloudinary.com/pei7pei8luobo/image/upload/v1630420930/vegetarian_gzpvzo.svg" width="200" height="200" >
</p>

# Restaurant project - frontend
This is an SPA website for booking a table in an imagined vegan restanrant, using React as frontend and Node.js as backend. Foodies can simply browse the menu without login and they need to register as members if they want to make a reservation. On the other hand, admin can manage not only bookings from the customers but also content of the menu.


<img width="1440" alt="retauranthome" src="https://user-images.githubusercontent.com/58638019/132412312-c88f1312-0122-471f-b370-a98a5c31d09a.png">

# UI

<img width="1417" alt="login" src="https://user-images.githubusercontent.com/58638019/131512764-b8afc0b4-489c-4c28-a6f1-3dd85c34b7f1.png">

Or simply create a new account by registration.

<img width="1419" alt="register" src="https://user-images.githubusercontent.com/58638019/131512782-56af10b9-534e-49fd-bb34-488ae5102bf0.png">

# About this project
 This is a simple homepage of an imagined restaurant where only HTML and CSS are used with React for frontend and Node.js for backend, we have decided to create a SPA website where customers can make reservation without spending time to call restaurants. On the other hand, restaurant owners can save time to look for the availability when customers phone in, meaning they will have more time to be creative in their cuisine.

# Fatures
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
* Create React APP // Creating a React app and its environment
* React hooks // Management of UI components
* React Router // Management of router
* React Boostrap // Creating navigation bar with RWD easily
* styled-components // Style with CSS-in-JS components
* react-calendar // An UI component that manage dates for booking a table
* fetch // Communicating with back-end server (Node.js) via API
* LocalStorage // Saving JWT token for authentication
* react-stripe-checkout // Stripe API which manages payment
* swiper // An UI component creating carousel effect for customers' review
* react-router-hash-link // Same-page-navigation that is used when admin is editing the menu
* Heroku // Deployed to heroku

# Content
* Customers
<img width="1421" alt="menu" src="https://user-images.githubusercontent.com/58638019/131515265-f0af285f-d9be-46a0-bd29-c9f507e2920d.png">

<img width="1421" alt="reserve1" src="https://user-images.githubusercontent.com/58638019/131515418-0c9a4ffa-c037-417c-a2f7-e21e8e9c1aae.png">

<img width="1418" alt="reserve2" src="https://user-images.githubusercontent.com/58638019/131515478-0a150988-643d-4806-a9b1-59ca052c2d48.png">

<img width="1413" alt="reserve3" src="https://user-images.githubusercontent.com/58638019/131515517-beb66d88-0821-4716-a60a-9a09ac25923e.png">

<img width="1420" alt="reserve4" src="https://user-images.githubusercontent.com/58638019/131515704-7c63b7cd-f3ac-4f45-b5d0-3cc6c96daff0.png">

<img width="1420" alt="myreserve1" src="https://user-images.githubusercontent.com/58638019/131515588-aa05c266-23e3-4d02-afd5-4e27559a4c60.png">

<img width="1418" alt="myreserve2" src="https://user-images.githubusercontent.com/58638019/131515640-b6d9e408-0c7c-4010-b405-209e612c78d4.png">

<img width="1417" alt="stripepay" src="https://user-images.githubusercontent.com/58638019/131515820-5e193fde-5aa9-47b1-8ffd-da9321f5b3d0.png">

* Restaurant owners 

<img width="1418" alt="adminmenu1" src="https://user-images.githubusercontent.com/58638019/131515884-718bfe15-c80b-464e-8a3c-18cfe0e74346.png">

<img width="1417" alt="adminmenu2" src="https://user-images.githubusercontent.com/58638019/131515940-c84092ff-20b9-43f4-81d9-32e44ad3623f.png">

<img width="1418" alt="adminreserve" src="https://user-images.githubusercontent.com/58638019/131515995-ba6292c6-fab4-421e-b5f4-bfd166daef6b.png">

# Resources
[Unsplash](https://unsplash.com)

[Flaticon](https://www.flaticon.com)

# Declaration
This website is only for prectice and learning, not for any business use.

# Installing
1. Clone this repository
```javascript
git clone https://github.com/lanru2001/Restaurant_Reservation_Project.git
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
Note: The version of node the application was written is v17.

#####################################################################################################################

<p align="center">
<img alt="favicon" src="https://res.cloudinary.com/pei7pei8luobo/image/upload/v1630420930/vegetarian_gzpvzo.svg" width="200" height="200" >
</p>

# Restaurant project - backend
This is an SPA website for booking a table in an imagined vegan restanrant, using React as frontend and Node.js as backend. Foodies can simply browse the menu without login and they need to register as members if they want to make a reservation. On the other hand, admin can manage not only bookings from the customers but also content of the menu.

<img width="1425" alt="homepage" src="https://user-images.githubusercontent.com/58638019/131510974-315a3e5e-9c26-420e-baec-c861a585f06a.png">

# Demo
[Demo](https://reactrestaurantfn.herokuapp.com/#/).

You may use the admin's login. Username: admin, password: admin12345678.

:bangbang: I would be really appreciate if you just delete the picture you uploaded when you want to edit menu. This is due to the fact that I need those already-exist pictures to be displayed in the menu page. Thank you in advance. :smiley:


<img width="1417" alt="login" src="https://user-images.githubusercontent.com/58638019/131512764-b8afc0b4-489c-4c28-a6f1-3dd85c34b7f1.png">

Or simply create a new account by registration.

<img width="1419" alt="register" src="https://user-images.githubusercontent.com/58638019/131512782-56af10b9-534e-49fd-bb34-488ae5102bf0.png">

# About this project
This project is inspired by [one of my assignment](https://github.com/Lidemy/mentor-program-4th-Pei-wen-code/tree/master/homeworks/week6) when I was learning in a [coding mentorship programme](https://github.com/Lidemy/mentor-program-4th-Pei-wen-code) with Lidemy. That is a simple homepage of an imagined restaurant where only HTML and CSS are used. Having been learning React and Node.js, I decide to create a SPA website where customers can make reservation without spending time to call restaurants. On the other hand, restaurant owners can save time to look for the availability when customers phone in, meaning they will have more time to be creative in their cuisine.

# Fatures
BASE_URL: https://agile-taiga-49676.herokuapp.com

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

# Technology used
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
* uuid // Create idempotency key for safely retry payment request
* Heroku // Deployed to heroku


# Declaration
This website is only for prectice and learning, not for any business use.

# Installing
1. Clone this repository
```javascript
git clone https://github.com/Pei-wen-code/react_restaurant_backN
```

2.Install packages
```javascript
npm install
```

3.Run this project locally
```javascript
node index.js
```

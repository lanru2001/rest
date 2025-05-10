const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();
const storage = multer.diskStorage({
    destination: './public/upload',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({storage: storage});

const usersController = require('./controllers/users');
const reserveController = require('./controllers/reserve');
const productsController = require('./controllers/products');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// CORS Configuration for local development
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));

app.use(express.static('./public'));

// Add this root route handler
app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'Restaurant API is running',
        endpoints: {
            auth: ['/register', '/login', '/getme'],
            reservations: ['/reserve', '/payment', '/userbooking', '/userinfo'],
            products: ['/product']
        }
    });
});

// Routes without token verification
app.get('/getme', usersController.getMe);
app.post('/register', usersController.register);
app.post('/login', usersController.login);

app.get('/reserve/:date', reserveController.getReserve);
app.post('/reserve', reserveController.createReserve);
app.post('/payment', reserveController.bookingFee);
app.get('/userbooking/:username', reserveController.getUserBooking);
app.get('/userinfo/:username', reserveController.getUserInfo);
app.patch('/updatemail/:id', reserveController.updateMail);
app.patch('/ispaid/:id', reserveController.isPaid);

app.delete('/cancel/:id', reserveController.cancelReserve);
app.patch('/update/:id', reserveController.updateReserve);

app.post('/product', upload.single('file'), productsController.addProduct);
app.get('/product/:type', productsController.getProducts);
app.delete('/product/:id', productsController.deleteProduct);
app.put('/product/update/:id', upload.single('file'), productsController.updateProduct);
app.patch('/product/updatetext/:id', productsController.updateProductText);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const express = require('express');
require('dotenv').config({path: `${process.cwd()}/.env`});

const app = express();

// contact rout
const contactRouter = require('./routes/contact');
const userRouter = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
// connecting to database
connectDb(); 


// data parse
app.use(express.json());
// for contacts
app.use('/api/v1/contacts', contactRouter)
app.use('/api/v1/users', userRouter)
// error handler middleware
app.use(errorHandler);


// Handling errors for undefined routes
app.use('*', (req, res, next) => {
    res.status(404).json({
        status: "Error",
        message : "Route not found"
    })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("We are listening on", port);
})
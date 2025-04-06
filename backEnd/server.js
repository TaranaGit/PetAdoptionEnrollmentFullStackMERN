const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./router/appRouter')
const cors = require('cors');


const app =express();
const Db_connection = process.env.DB_URI;

// Middleware, here sequence matters
app.use(cors({
    origin: "http://localhost:5173",  
    methods: "GET,POST,PUT,DELETE",
})); 
app.use(express.json()); // ✅ Parse JSON request body
app.use('/adopters', router);


mongoose.connect(Db_connection)
.then(()=>{
    console.log("Successfully connected to MongoDB");
    app.listen(3000, (req, res)=>{
        console.log("Server is running on port 3000");
    })
})
.catch((err)=>{
    console.log(`Unable to connect to DB ${err}`)
})
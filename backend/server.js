const express = require("express");
const app = express();
const PORT = 8080;
const connectDB = require("./utils/db");
const authRouter = require("./router/auth-router/auth-router");

// Middlewares
app.use(express.json());

// Auth Route
app.use("/api/auth", authRouter );

// Products Routes


// Start the Server
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log('app is running on PORT No. 8080');
    });
})
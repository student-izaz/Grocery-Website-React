const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/grocery_app_database";

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log('connect to database successfully...')
    } catch (error) {
        console.error('database connection failed...', error);
        process.exit(0);
    }
}

module.exports = connectDB;
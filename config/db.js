const mongoose = require('mongoose');

const connectDb = async() => {
    await mongoose.connect(process.env.DATABASE);
    console.log("Db connection successfully");
};

module.exports = connectDb
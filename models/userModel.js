const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add a username"]
    },
    email:{
        type: String,
        required: [true, "Please add an email"],
        unique: [true, "Email Address already exists"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    }

},{
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User;
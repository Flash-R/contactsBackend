const AsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//@desc Create a new user
//@route POST /api/users/
//@access public
const register = AsyncHandler(async (req, res) =>{
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(404);
        throw new Error({ message: "Please enter All Files"})
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(404);
        throw new Error({ message: "User Already Exists"})
    }

    // BCrypt for hashing the password
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        username,
        email,
        password:  hashPassword
    });
    console.log(newUser);
    if(newUser){
        res.status(200).json({
            _id: newUser.id,
            email: newUser.email
        })
    }else{
        res.status(404);
        throw new Error({ message: "User Not Created, Please check your Information"})
    }
});

//@desc Login to the account
//@route POST /api/users/
//@access public
const login = AsyncHandler(async (req, res) =>{
    res.status(200).json({
        message: "User Logged In"
    })
});

//@desc Login to the account
//@route get /api/users/
//@access public
const userInfo = AsyncHandler(async (req, res) =>{
    res.status(200).json({
        message: "User Information"
    })
});



module.exports = {
    register,
    login,
    userInfo
}
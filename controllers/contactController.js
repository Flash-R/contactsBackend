const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts/
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();

    res.status(200).json(contacts);
});

//@desc Get single contacts
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get sinle contacts from controller ${req.params.id}`});
});

//@desc create contacts
//@route POST /api/contacts/
//@access public
const createContacts = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!email || !name){
        res.status(404);
        throw new Error("All fields are required")
    }
    const contact = Contact.create({name, email, phone});
    res.status(200).json({message: "create contacts from controller"});
});

//@desc update contacts
//@route GET /api/contacts/:id
//@access public
const updateContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update contacts of ${req.params.id}`});
});

//@desc delete  contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete contact of ${req.params.id}`});
});



module.exports = {
    getContacts,
    getContact,
    createContacts,
    updateContacts,
    deleteContacts
};
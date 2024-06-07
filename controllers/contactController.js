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
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
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
    res.status(200).json(contact);
});

//@desc update contacts
//@route GET /api/contacts/:id
//@access public
const updateContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact);
});

//@desc delete  contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findOneAndDelete(req.params.id);
    res.status(200).json(contact);
});



module.exports = {
    getContacts,
    getContact,
    createContacts,
    updateContacts,
    deleteContacts
};
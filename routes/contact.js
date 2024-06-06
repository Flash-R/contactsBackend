const express = require('express');
const { getContacts, createContacts, updateContacts, getContact, deleteContacts } = require('../controllers/contactController');
const router = express.Router();

router.route('/').get(getContacts).post(createContacts);
router.route('/:id').get(getContact).put(updateContacts).delete(deleteContacts);;




module.exports = router;
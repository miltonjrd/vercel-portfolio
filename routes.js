const express = require('express');
const router = express.Router();

const MailController = require('./controllers/MailController');

router.post('/contact', MailController.send);

module.exports = router;
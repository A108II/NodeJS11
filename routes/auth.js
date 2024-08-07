const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/auth_controller');

router.post('/', auth_controller.handleLogin);

module.exports = router;


const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);

// Se pueden agregar más rutas como login, etc.

module.exports = router;

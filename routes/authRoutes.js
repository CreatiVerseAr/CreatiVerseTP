const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware'); 

// Rutas para registro, login y perfil
router.post('/register', authController.register);
router.post('/login', authController.login);
router.put('/profile', authMiddleware, authController.updateProfile); // para actualizar perfil

module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware'); 

// Ruta para el registro, login y perfil
router.post('/register', authController.register);
router.post('/login', authController.login);
router.put('/profile', authMiddleware, authController.updateProfile); // para actualizar perfil
router.get('/users', authMiddleware, authController.getUsers); // mostrar clientes en post
router.delete('/user/:id', authMiddleware, authController.deleteUser); // para eliminar usuario

module.exports = router;

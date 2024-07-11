const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const authRoutes = require('./routes/authRoutes'); 
const { db } = require ('./config/config');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para habilitar cors
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Correr
app.listen(PORT, () => {
  console.log(`Server esta corriendo en el puerto 🚀 ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
//const authRoutes = require('./routes/authRoutes'); 
const { db } = require ('./config/config');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para habilitar cors
app.use(cors());
app.use(express.json());

// Middleware para parsear las solicitudes
app.use(bodyParser.json());

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de autenticación
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Ruta para el archivo HTML home
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Correr
app.listen(PORT, () => {
  console.log(`Server esta corriendo en el puerto 🚀 ${PORT}`);
});

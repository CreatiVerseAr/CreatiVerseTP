const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/config');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar las rutas de autenticación
app.use('/api/auth', authRoutes);

// Servir archivos estáticos desde la raíz de "public"
app.use(express.static(__dirname + '/public'));

// Servir las vistas HTML desde la raíz del proyecto
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/nosotros', (req, res) => {
  res.sendFile(__dirname + '/nosotros.html');
});
app.get('/cursos', (req, res) => {
  res.sendFile(__dirname + '/cursos.html');
});
app.get('/registro', (req, res) => {
  res.sendFile(__dirname + '/registro.html');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

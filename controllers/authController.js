const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const register = async (req, res) => {
  const { nombre, apellido, genero, email, password, nivel } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    nombre,
    apellido,
    genero,
    email,
    password: hashedPassword,
    nivel
  };

  User.create(newUser, (err, result) => {
    if (err) {
      res.status(500).send('Error al registrar el cliente');
    } else {
      res.status(201).send('Cliente registrado');
    }
  });
};

module.exports = {
  register
};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = async (req, res) => {
  const { nombre, apellido, genero, email, password, nivel } = req.body;
  console.log('Received registration request for:', email);
  try {
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
        console.error('Error registering user:', err);
        return res.status(500).send('Error al registrar el cliente');
      }
      console.log('User registered successfully:', email);
      res.status(201).send('Cliente registrado con exito!');
    });
  } catch (error) {
    console.error('Error al registrar el cliente:', error);
    res.status(500).send('Error al registrar el cliente');
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Received login request for:', email);
  try {
    User.findByEmail(email, async (err, user) => {
      if (err) {
        console.error('Error finding user:', err);
        return res.status(500).send('Error al buscar el cliente');
      }
      if (!user) {
        console.log('User not found:', email);
        return res.status(404).send('Cliente no encontrado');
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Incorrect password for:', email);
        return res.status(401).send('Contraseña incorrecta');
      }

      const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
      console.log('User logged in successfully:', email);
      res.status(200).json({ token });
    });
  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error);
    res.status(500).send('Error al intentar iniciar sesión');
  }
};

module.exports = {
  register,
  login
};

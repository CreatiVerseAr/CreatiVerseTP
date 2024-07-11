const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const jwtSecret = 'your_jwt_secret'; 

const register = async (req, res) => {
  const { nombre, apellido, genero, email, password, nivel } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { nombre, apellido, genero, email, password: hashedPassword, nivel };

    User.create(newUser, (err, result) => {
      if (err) return res.status(500).send('Error al registrar el cliente');
      res.status(201).send('Cliente registrado');
    });
  } catch (error) {
    res.status(500).send('Error al registrar el cliente');
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    User.findByEmail(email, async (err, user) => {
      if (err) return res.status(500).send('Error al buscar el cliente');
      if (!user) return res.status(404).send('Cliente no encontrado');

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).send('Contraseña incorrecta');

      const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1h' });
      res.status(200).json({ token });
    });
  } catch (error) {
    res.status(500).send('Error al intentar iniciar sesión');
  }
};

const updateProfile = async (req, res) => {
  const { id, nombre, apellido, genero, email, password, nivel } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = { nombre, apellido, genero, email, password: hashedPassword, nivel };

    User.update(id, updatedUser, (err, result) => {
      if (err) return res.status(500).send('Error al actualizar el cliente');
      if (result.affectedRows === 0) return res.status(404).send('Cliente no encontrado');
      res.status(200).send('Cliente actualizado');
    });
  } catch (error) {
    res.status(500).send('Error al actualizar el cliente');
  }
};
// Para ver los usuarios
const getUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) return res.status(500).send('Error al obtener los clientes');
    res.status(200).json(users);
  });
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  console.log('Atencion elimina el usuario del ID:', userId);
  User.delete(userId, (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      return res.status(500).send('Error al eliminar el cliente');
    }
    if (result.affectedRows === 0) {
      console.log('User not found:', userId);
      return res.status(404).send('Cliente no encontrado');
    }
    console.log('User deleted successfully:', userId);
    res.status(200).send('Cliente eliminado');
  });
};

module.exports = {
  register,
  login,
  updateProfile,
  getUsers,
  deleteUser
};

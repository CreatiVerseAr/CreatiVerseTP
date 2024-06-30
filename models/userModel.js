const { db } = require('../config/config');

const User = {
  create: (newUser, callback) => {
    const query = 'INSERT INTO users (nombre, apellido, genero, email, password, nivel) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [newUser.nombre, newUser.apellido, newUser.genero, newUser.email, newUser.password, newUser.nivel], callback);
  },
  
  findByEmail: (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
      if (err) return callback(err, null);
      if (results.length === 0) return callback(null, null);
      return callback(null, results[0]);
    });
  },

  update: (userId, updatedFields, callback) => {
    // Construye la consulta para actualizar el usuario
    const { nombre, apellido, genero, nivel } = updatedFields;
    const query = 'UPDATE users SET nombre = ?, apellido = ?, genero = ?, nivel = ? WHERE id = ?';
    db.query(query, [nombre, apellido, genero, nivel, userId], callback);
  }
};

module.exports = User;

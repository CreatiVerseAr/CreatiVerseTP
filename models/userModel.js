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
  }
};

module.exports = User;


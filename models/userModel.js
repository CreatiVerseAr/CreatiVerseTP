const db = require('../config/config');

const User = {
  create: (data, callback) => {
    const query = `INSERT INTO Clientes (nombre, apellido, genero, email, password, nivel) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(
      query,
      [data.nombre, data.apellido, data.genero, data.email, data.password, data.nivel],
      callback
    );
  },
  // Otros métodos como find, update, delete pueden ser agregados aquí
};

module.exports = User;

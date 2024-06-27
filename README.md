# CreatiVerse Codo A Codo
Sitio web creado como trabajo final de equipo.

# Falta:
* Carrito de compras

# Instalamos:
npm install express body-parser mysql2 bcrypt jsonwebtoken

# Creamos:
* Crea una base de datos llamada RegistroClientes en MySQL.

# Levantar proyecto:
* node index.js

# Probamos en postman:
* POST a http://localhost:3000/api/auth/register
{
  "nombre": "John",
  "apellido": "Doe",
  "genero": "masculino",
  "email": "johndoe@example.com",
  "password": "password123",
  "nivel": "basico"
}
* En el cuerpo de la solicitud, seleccionar "raw" y elige "JSON".

# Estructura:
* myproject/
├── config/
│   └── config.js
├── controllers/
│   └── authController.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   └── userModel.js
├── routes/
│   └── authRoutes.js
├── public/
│   ├── index.html
│   ├── nosotros.html
│   ├── cursos.html
│   ├── registro.html
│   └── css/
│       └── style.css
│   └── js/
│       └── lenguaje.js
│       └── validacion.js
├── index.js
└── package.json

# .gitignore
* Ignora la carpeta node_modules
node_modules




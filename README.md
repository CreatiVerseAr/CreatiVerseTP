# CreatiVerse Codo A Codo
Sitio web creado como trabajo final de equipo.

# Falta:
* Carrito de compras

# Instalamos:
npm install express body-parser mysql2 bcrypt jsonwebtoken
npm start
control + c Cierra


# Creamos:
* Crea una base de datos llamada RegistroClientes en MySQL.

# Levantar proyecto:
* node index.js
* npm start

# Probamos en postman:
* Creamos una carpeta en Postman:
New/
├── Collection/  (el nombre se lo podemos cambiar haciendo clic sobre el)
   └── New Request
Save o Save as si ya habiamos usado.

* POST a http://localhost:3000/api/auth/register
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "genero": "masculino",
  "email": "juan.perez@gmail.com",
  "password": "123456",
  "nivel": "intermedio"
}
{
  "nombre": "Pablo",
  "apellido": "Lopez",
  "genero": "masculino",
  "email": "Lopez@gmail.com",
  "password": "78910",
  "nivel": "basico"
}
{
  "nombre": "Eric",
  "apellido": "Dondeestas",
  "genero": "masculino",
  "email": "buscandoaeric@gmail.com",
  "password": "134679",
  "nivel": "basico"
}
{
  "nombre": "Juana",
  "apellido": "Garcia",
  "genero": "femenino",
  "email": "Garcia@gmail.com",
  "password": "179352",
  "nivel": "avanzado"
}
* En el cuerpo de la solicitud, seleccionar "raw" y elige "JSON".

* http://localhost:3000/api/auth/login
{
  "email": "juan.perez@gmail.com",
  "password": "123456"
}




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

# Node
* "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
     "start": "node index.js" (agregamos)
},
# xammp
* Cambios en config.inc.php:
$cfg['Servers'][$i]['password'] = 'Athos88';
$cfg['Servers'][$i]['AllowNoPassword'] = false;



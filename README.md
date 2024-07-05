# CreatiVerse Codo A Codo
Sitio web creado como trabajo final de equipo.

# Instalamos:
* npm install express body-parser mysql2 bcrypt jsonwebtoken
* npm start
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

 # POST
* POST a http://localhost:3000/api/auth/register
* {
  "nombre": "Juan",
  "apellido": "Pérez",
  "genero": "masculino",
  "email": "juan.perez@gmail.com",
  "password": "123456",
  "nivel": "intermedio"
}
* {
  "nombre": "Pablo",
  "apellido": "Lopez",
  "genero": "masculino",
  "email": "Lopez@gmail.com",
  "password": "78910",
  "nivel": "basico"
}
* {
  "nombre": "Eric",
  "apellido": "Dondeestas",
  "genero": "masculino",
  "email": "buscandoaeric@gmail.com",
  "password": "134679",
  "nivel": "basico"
}
* {
  "nombre": "Juana",
  "apellido": "Garcia",
  "genero": "femenino",
  "email": "Garcia@gmail.com",
  "password": "179352",
  "nivel": "avanzado"
}
* {
  "nombre": "john",
  "apellido": "Nose",
  "genero": "masculino",
  "email": "john@gmail.com",
  "password": "calle123",
  "nivel": "basico"
}
{
  "nombre": "Alma",
  "apellido": "Lista",
  "genero": "femeino",
  "email": "lista@gmail.com",
  "password": "santa365",
  "nivel": "basico"
}
* En el cuerpo de la solicitud, seleccionar "raw" y elige "JSON".

# POST
* http://localhost:3000/api/auth/login
{
  "email": "juan.perez@gmail.com",
  "password": "123456"
}

# PUT
* http://localhost:3000/api/auth/profile.
Método: PUT
Headers:
Key: Authorization
Value: Bearer <TOKEN> ( token recibido)
Body (JSON):json

{
 "id": 8, / Usar el ID del usuario
  "nombre": "Alma",
  "apellido": "Lista",
  "genero": "femenino",
  "email": "lista@gmail.com",
  "password": "santa366",
  "nivel": "basico"
}
Para metodo PUT modifica el cliente.

# GET
* Para ver todos los usuarios:
URL: http://localhost:3000/api/auth/users
Método: GET
Headers:
Key: Authorization
Value: Bearer <TOKEN> (token recibido al iniciar sesión)

# DELETE 
* URL: http://localhost:3000/api/auth/user/{id}
Method: DELETE
Headers:
Key: Authorization
Value: Bearer <your_token>
Path Variables:
Key: id
Value: <user_id_to_delete>




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
* $cfg['Servers'][$i]['password'] = 'Athos88';
* $cfg['Servers'][$i]['AllowNoPassword'] = false;



# Falta:
* Carrito de compras
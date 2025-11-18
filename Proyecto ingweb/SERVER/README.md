# Sistema de Gestión de Paquetes - Backend

Este es el backend de un sistema de gestión de paquetes desarrollado como parte de la Guía 5 de Ingeniería Web. La aplicación permite gestionar paquetes y repartidores, con operaciones CRUD completas a través de una API RESTful.

## Características

- Gestión de paquetes (crear, leer, actualizar, eliminar)
- Gestión de repartidores
- API RESTful con Express.js
- Base de datos MongoDB con Mongoose
- Configuración de variables de entorno
- CORS habilitado para comunicación con frontend
- Desarrollo con Nodemon para recarga automática

##  Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- MongoDB (local o en la nube)
- Variables de entorno configuradas (ver sección de configuración)

## Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JCbral04/IngeWebA3/tree/main/Guia%205/SERVER
   cd SERVER
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   PORT=5000
   MONGO_URI=tu_cadena_de_conexion_mongodb
   ```

4. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

##  Estructura del Proyecto

```
SERVER/
├── config/               # Configuraciones
│   └── db.js            # Configuración de la base de datos
├── controllers/         # Controladores
│   ├── paquetes.controller.js
│   └── repartidor.controller.js
├── models/              # Modelos de Mongoose
│   ├── Paquete.js
│   └── Repartidor.js
├── routes/              # Rutas de la API
│   ├── paquetes.routes.js
│   └── repartidor.routes.js
├── .env                 # Variables de entorno
├── .gitignore
├── index.js             # Punto de entrada de la aplicación
├── package.json
└── README.md
```

##  API Endpoints

### Paquetes
- `POST /api/paquetes` - Crear un nuevo paquete
- `GET /api/paquetes` - Obtener todos los paquetes
- `PUT /api/paquetes/:id` - Actualizar el estado de un paquete
- `DELETE /api/paquetes/:id` - Eliminar un paquete

### Repartidores
- `POST /api/repartidores` - Crear un nuevo repartidor
- `GET /api/repartidores` - Obtener todos los repartidores
- `PUT /api/repartidores/:id` - Actualizar información de un repartidor
- `DELETE /api/repartidores/:id` - Eliminar un repartidor

## Pruebas

Para ejecutar el servidor en modo desarrollo con recarga automática:
```bash
npm run dev
```

##  Seguridad

- Asegúrate de nunca subir el archivo `.env` al repositorio
- Utiliza variables de entorno para datos sensibles
- Implementa autenticación y autorización en un entorno de producción


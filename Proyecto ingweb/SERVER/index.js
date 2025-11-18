require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

const app = express();

// Conectar a la base de datos
conectarDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Middleware para registrar todas las solicitudes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});


app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

// Rutas
app.use('/api/paquetes', require('./routes/paquetes.routes')); 
app.use('/api/repartidores', require('./routes/repartidor.routes'));
app.use('/api/dashboard', require('./routes/dashboard.routes')); 

// Puerto del servidor
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => 
  console.log(` Servidor corriendo en el puerto ${PORT}`)
);

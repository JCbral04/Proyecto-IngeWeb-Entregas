// Script para la conexión a la base de datos MongoDB usando Mongoose
const mongoose = require('mongoose');

// Método para conectar a la base de datos
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado correctamente a MongoDB');// Mensaje de éxito
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error.message);// Mensaje de error
        process.exit(1);// Salir del proceso con error
    }
};

module.exports = conectarDB;
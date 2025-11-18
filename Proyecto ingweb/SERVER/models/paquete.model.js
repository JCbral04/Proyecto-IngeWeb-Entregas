const mongoose = require('mongoose');

const paqueteSchema = new mongoose.Schema({
  numeroGuia: { type: String, required: true, unique: true },
  remitente: {
    nombre: String,
    direccion: String,
    telefono: String
  },
  destinatario: {
    nombre: String,
    direccion: String,
    telefono: String
  },
  dimensiones: {
    alto: Number,
    ancho: Number,
    largo: Number,
    peso: Number
  },
  estado: {
    type: String,
    enum: ['En bodega', 'En ruta', 'Entregado', 'Incidencia'],
    default: 'En bodega'
  },
  repartidorAsignado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Repartidor'
  },
  historialUbicaciones: [
    {
      lat: Number,
      lon: Number,
      fecha: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('Paquete', paqueteSchema);

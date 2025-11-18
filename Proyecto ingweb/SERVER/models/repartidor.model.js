const mongoose = require('mongoose');

const repartidorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  identificacion: { type: String, required: true, unique: true },
  ubicacionActual: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitud, latitud]
      default: [0, 0]
    }
  }
});

module.exports = mongoose.model('Repartidor', repartidorSchema);

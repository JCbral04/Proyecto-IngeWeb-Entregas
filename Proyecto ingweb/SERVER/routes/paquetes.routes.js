const express = require('express');
const router = express.Router();
const {
  crearPaquete,
  obtenerPaquetes,
  actualizarEstadoPaquete,
  eliminarPaquete
} = require('../controllers/paquetes.controller');

// Crear un nuevo paquete
router.post('/', crearPaquete);

// Obtener todos los paquetes
router.get('/', obtenerPaquetes);

// Actualizar el estado de un paquete (PUT)
router.put('/:id', actualizarEstadoPaquete);

// Eliminar un paquete (DELETE)
router.delete('/:id', eliminarPaquete);

module.exports = router;

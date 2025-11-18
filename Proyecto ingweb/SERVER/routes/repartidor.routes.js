const express = require('express');
const router = express.Router();
const Repartidor = require('../models/repartidor.model');

// Obtener todos los repartidores
router.get('/', async (req, res) => {
  try {
    const repartidores = await Repartidor.find();
    res.json(repartidores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un repartidor por ID
router.get('/:id', async (req, res) => {
  try {
    const repartidor = await Repartidor.findById(req.params.id);
    if (!repartidor) {
      return res.status(404).json({ message: 'Repartidor no encontrado' });
    }
    res.json(repartidor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Crear un nuevo repartidor
router.post('/', async (req, res) => {
  try {
    const nuevoRepartidor = new Repartidor({
      nombre: req.body.nombre,
      identificacion: req.body.identificacion,
      ubicacionActual: req.body.ubicacionActual || {
        type: 'Point',
        coordinates: [0, 0]
      }
    });
    const repartidorGuardado = await nuevoRepartidor.save();
    res.status(201).json(repartidorGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Actualizar un repartidor
router.put('/:id', async (req, res) => {
  try {
    const repartidor = await Repartidor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!repartidor) {
      return res.status(404).json({ message: 'Repartidor no encontrado' });
    }
    res.json(repartidor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Eliminar un repartidor
router.delete('/:id', async (req, res) => {
  try {
    const repartidor = await Repartidor.findByIdAndDelete(req.params.id);
    if (!repartidor) {
      return res.status(404).json({ message: 'Repartidor no encontrado' });
    }
    res.json({ message: 'Repartidor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

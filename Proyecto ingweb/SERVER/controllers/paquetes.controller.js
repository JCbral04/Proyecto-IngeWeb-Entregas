
//Ultima version del Script para el controlador de paquetes con CRUD completo
const Paquete = require('../models/paquete.model');

// Crear un nuevo paquete
exports.crearPaquete = async (req, res) => {
  try {
    const nuevoPaquete = new Paquete(req.body);
    await nuevoPaquete.save();
    res.status(201).json(nuevoPaquete);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear paquete', error });
  }
};

// Obtener todos los paquetes
exports.obtenerPaquetes = async (req, res) => {
  try {
    const paquetes = await Paquete.find();
    res.json(paquetes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener paquetes', error });
  }
};

// Actualizar el estado de un paquete por ID
exports.actualizarEstadoPaquete = async (req, res) => {
  try {
    const { id } = req.params; // ID del paquete
    const { estado } = req.body; // Nuevo estado

    // Buscar y actualizar el paquete
    const paqueteActualizado = await Paquete.findByIdAndUpdate(
      id,
      { estado },
      { new: true } // Devuelve el documento actualizado
    );

    if (!paqueteActualizado) {
      return res.status(404).json({ mensaje: 'Paquete no encontrado' });
    }

    res.status(200).json(paqueteActualizado);
  } catch (error) {
    console.error('Error al actualizar estado del paquete:', error);
    res.status(500).json({ mensaje: 'Error al actualizar estado del paquete', error });
  }
};

// Eliminar un paquete por ID
exports.eliminarPaquete = async (req, res) => {
  try {
    const { id } = req.params;

    const paqueteEliminado = await Paquete.findByIdAndDelete(id);

    if (!paqueteEliminado) {
      return res.status(404).json({ mensaje: 'Paquete no encontrado' });
    }

    res.status(200).json({ mensaje: 'Paquete eliminado correctamente', paqueteEliminado });
  } catch (error) {
    console.error('Error al eliminar paquete:', error);
    res.status(500).json({ mensaje: 'Error al eliminar paquete', error });
  }
};

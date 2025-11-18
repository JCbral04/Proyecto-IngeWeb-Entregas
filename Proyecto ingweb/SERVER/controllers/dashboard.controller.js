const Paquete = require('../models/paquete.model');
const Repartidor = require('../models/repartidor.model');

// Obtener estadísticas del dashboard
exports.obtenerEstadisticas = async (req, res) => {
  console.log('Obteniendo estadísticas del dashboard...');
  try {
    console.log('Contando paquetes totales...');
    const totalPaquetes = await Paquete.countDocuments().exec();
    
    console.log('Contando repartidores activos...');
    const repartidoresActivos = await Repartidor.countDocuments({ activo: true }).exec();
    
    console.log('Contando entregas de hoy...');
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    const entregasHoy = await Paquete.countDocuments({
      fechaEntrega: { $gte: hoy },
      estado: 'entregado'
    }).exec();

    console.log('Estadísticas obtenidas correctamente:', {
      totalPaquetes,
      repartidoresActivos,
      entregasHoy
    });

    res.json({
      totalPaquetes,
      repartidoresActivos,
      entregasHoy
    });
  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    res.status(500).json({ 
      mensaje: 'Error al obtener estadísticas',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// Obtener actividad reciente
exports.obtenerActividadReciente = async (req, res) => {
  console.log('Obteniendo actividad reciente...');
  try {
    console.log('Buscando los últimos 5 paquetes...');
    const actividades = await Paquete.find()
      .sort({ fechaCreacion: -1 })
      .limit(5)
      .select('codigoSeguimiento estado fechaCreacion')
      .lean()
      .exec();

    console.log('Paquetes encontrados:', actividades.length);

    // Formatear las actividades
    const actividadFormateada = actividades.map(paquete => ({
      id: paquete._id,
      message: `Paquete ${paquete.codigoSeguimiento || 'N/A'} - ${paquete.estado || 'sin estado'}`,
      timestamp: paquete.fechaCreacion || new Date()
    }));

    console.log('Actividad reciente formateada:', actividadFormateada);
    res.json(actividadFormateada);
  } catch (error) {
    console.error('Error al obtener actividad reciente:', error);
    res.status(500).json({ 
      mensaje: 'Error al obtener actividad reciente',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

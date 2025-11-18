const express = require('express');
const router = express.Router();
const { 
  obtenerEstadisticas, 
  obtenerActividadReciente 
} = require('../controllers/dashboard.controller');

// Middleware para registrar las solicitudes al dashboard
router.use((req, res, next) => {
  console.log(`[Dashboard] Nueva solicitud a: ${req.method} ${req.originalUrl}`);
  next();
});

// Ruta para obtener las estadísticas del dashboard
router.get('/stats', (req, res, next) => {
  console.log('Solicitud a /api/dashboard/stats recibida');
  obtenerEstadisticas(req, res).catch(next);
});

// Ruta para obtener la actividad reciente
router.get('/activity', (req, res, next) => {
  console.log('Solicitud a /api/dashboard/activity recibida');
  obtenerActividadReciente(req, res).catch(next);
});

console.log('Rutas del dashboard registradas:');
console.log('GET /api/dashboard/stats');
console.log('GET /api/dashboard/activity');

module.exports = router;

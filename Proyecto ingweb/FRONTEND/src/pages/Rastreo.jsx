import { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioRastreo from '../components/FormularioRastreo';
import EstadoPaquete from '../components/EstadoPaquete';
import MapaRastreo from '../components/MapaRastreo';

export default function Rastreo() {
  const [paquete, setPaquete] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBuscar = async (guia) => {
    try {
      setLoading(true);
      setError(null);
      
      // Reemplaza con tu endpoint real de la API
      const response = await axios.get(`/api/paquetes/guia/${guia}`);
      
      if (response.data) {
        // Asegúrate de que el paquete tenga las propiedades necesarias
        const paqueteEncontrado = {
          ...response.data,
          // Si el backend no devuelve la ubicación, usa una por defecto
          ubicacion: response.data.ubicacion || [4.60971, -74.08175] // Bogotá por defecto
        };
        setPaquete(paqueteEncontrado);
      } else {
        setError('No se encontró ningún paquete con ese número de guía');
        setPaquete(null);
      }
    } catch (err) {
      console.error('Error al buscar el paquete:', err);
      setError('Error al buscar el paquete. Intente nuevamente.');
      setPaquete(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Rastreo de Paquetes</h1>
      
      <div className="max-w-4xl mx-auto">
        <FormularioRastreo onBuscar={handleBuscar} />
        
        {loading && (
          <div className="text-center py-4">
            <p className="text-gray-600">Buscando paquete...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {paquete && (
          <>
            <EstadoPaquete paquete={paquete} />
            <div className="mt-6 bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Ubicación en tiempo real</h2>
              <MapaRastreo ubicacion={paquete.ubicacion} />
            </div>
            
            {/* Historial de ubicaciones si está disponible */}
            {paquete.historialUbicaciones && paquete.historialUbicaciones.length > 0 && (
              <div className="mt-6 bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Historial de ubicaciones</h2>
                <div className="space-y-2">
                  {paquete.historialUbicaciones.map((ubicacion, index) => (
                    <div key={index} className="border-b pb-2">
                      <p className="text-sm text-gray-600">
                        {new Date(ubicacion.fecha).toLocaleString()}
                      </p>
                      <p className="text-sm">
                        Lat: {ubicacion.lat}, Lng: {ubicacion.lon}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

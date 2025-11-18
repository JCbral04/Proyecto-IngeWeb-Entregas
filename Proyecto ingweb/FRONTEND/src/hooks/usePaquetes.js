import { useState, useEffect } from "react";
import {
  obtenerPaquetes,
  crearPaquete,
  actualizarPaquete,
  eliminarPaquete
} from "../services/paquetesService";

export default function usePaquetes() {
  const [paquetes, setPaquetes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar paquetes
  const cargarPaquetes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await obtenerPaquetes();
      setPaquetes(data);
    } catch (err) {
      console.error('Error al cargar paquetes:', err);
      setError(err.message || 'Error al cargar los paquetes. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  // Crear paquete
  const agregarPaquete = async (nuevo) => {
    try {
      setLoading(true);
      setError(null);
      const data = await crearPaquete(nuevo);
      setPaquetes([...paquetes, data]);
      return data;
    } catch (err) {
      console.error('Error al crear paquete:', err);
      setError(err.message || 'Error al crear el paquete. Por favor, verifica los datos e inténtalo de nuevo.');
      throw err; // Re-lanzar el error para que el componente lo maneje si es necesario
    } finally {
      setLoading(false);
    }
  };

  // Actualizar
  const editarPaquete = async (id, datosActualizados) => {
    try {
      setLoading(true);
      setError(null);
      const actualizado = await actualizarPaquete(id, datosActualizados);
      setPaquetes(paquetes.map(p => p._id === id ? actualizado : p));
      return actualizado;
    } catch (err) {
      console.error('Error al actualizar paquete:', err);
      setError(err.message || 'Error al actualizar el paquete. Por favor, inténtalo de nuevo.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Eliminar
  const borrarPaquete = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await eliminarPaquete(id);
      setPaquetes(paquetes.filter(p => p._id !== id));
    } catch (err) {
      console.error('Error al eliminar paquete:', err);
      setError(err.message || 'Error al eliminar el paquete. Por favor, inténtalo de nuevo.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Ejecutar al cargar
  useEffect(() => {
    cargarPaquetes();
  }, []);

  return {
    paquetes,
    loading,
    error,
    agregarPaquete,
    editarPaquete,
    borrarPaquete,
    cargarPaquetes
  };
}

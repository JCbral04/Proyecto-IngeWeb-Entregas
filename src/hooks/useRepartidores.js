import { useState, useEffect } from "react";
import {
  obtenerRepartidores,
  crearRepartidor,
  actualizarRepartidor,
  eliminarRepartidor
} from "../services/repartidoresService";

export default function useRepartidores() {
  const [repartidores, setRepartidores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cargarRepartidores = async () => {
    try {
      setLoading(true);
      const data = await obtenerRepartidores();
      setRepartidores(data);
    } catch (err) {
      setError("Error cargando repartidores");
    } finally {
      setLoading(false);
    }
  };

  const agregarRepartidor = async (nuevo) => {
    const data = await crearRepartidor(nuevo);
    setRepartidores([...repartidores, data]);
  };

  const editarRepartidor = async (id, datosActualizados) => {
    const actualizado = await actualizarRepartidor(id, datosActualizados);
    setRepartidores(
      repartidores.map(r => r._id === id ? actualizado : r)
    );
  };

  const borrarRepartidor = async (id) => {
    await eliminarRepartidor(id);
    setRepartidores(repartidores.filter(r => r._id !== id));
  };

  useEffect(() => {
    cargarRepartidores();
  }, []);

  return {
    repartidores,
    loading,
    error,
    agregarRepartidor,
    editarRepartidor,
    borrarRepartidor,
    cargarRepartidores
  };
}

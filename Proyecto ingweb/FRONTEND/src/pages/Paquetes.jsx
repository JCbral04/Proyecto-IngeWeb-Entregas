import React, { useState } from "react";
import usePaquetes from "../hooks/usePaquetes";

export default function Paquetes() {
  const {
    paquetes,
    loading,
    error,
    agregarPaquete,
    borrarPaquete
  } = usePaquetes();

  const [nuevo, setNuevo] = useState({
    numeroGuia: "",
    remitente: {
      nombre: "",
      direccion: "",
      telefono: ""
    },
    destinatario: {
      nombre: "",
      direccion: "",
      telefono: ""
    },
    dimensiones: {
      alto: "",
      ancho: "",
      largo: "",
      peso: ""
    },
    estado: "En bodega"
  });

  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setNuevo(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setNuevo(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convertir dimensiones a números
      const paqueteParaEnviar = {
        ...nuevo,
        dimensiones: {
          alto: parseFloat(nuevo.dimensiones.alto) || 0,
          ancho: parseFloat(nuevo.dimensiones.ancho) || 0,
          largo: parseFloat(nuevo.dimensiones.largo) || 0,
          peso: parseFloat(nuevo.dimensiones.peso) || 0
        }
      };
      
      await agregarPaquete(paqueteParaEnviar);
      
      // Resetear el formulario
      setNuevo({
        numeroGuia: "",
        remitente: {
          nombre: "",
          direccion: "",
          telefono: ""
        },
        destinatario: {
          nombre: "",
          direccion: "",
          telefono: ""
        },
        dimensiones: {
          alto: "",
          ancho: "",
          largo: "",
          peso: ""
        },
        estado: "En bodega"
      });
    } catch (error) {
      console.error("Error al crear el paquete:", error);
    }
  };

  if (loading) return <p className="text-center mt-10">Cargando paquetes...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Gestión de Paquetes</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Nuevo Paquete</h2>
        
        {/* Número de Guía */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroGuia">
            Número de Guía *
          </label>
          <input
            type="text"
            id="numeroGuia"
            name="numeroGuia"
            placeholder="Ej: PG-123456"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={nuevo.numeroGuia}
            onChange={handleNestedChange}
            required
          />
        </div>

        {/* Sección Remitente */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-3">Datos del Remitente</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remitente.nombre">
                Nombre *
              </label>
              <input
                type="text"
                id="remitente.nombre"
                name="remitente.nombre"
                placeholder="Nombre completo"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nuevo.remitente.nombre}
                onChange={handleNestedChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remitente.telefono">
                Teléfono
              </label>
              <input
                type="tel"
                id="remitente.telefono"
                name="remitente.telefono"
                placeholder="Teléfono"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nuevo.remitente.telefono}
                onChange={handleNestedChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remitente.direccion">
                Dirección *
              </label>
              <input
                type="text"
                id="remitente.direccion"
                name="remitente.direccion"
                placeholder="Dirección completa"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nuevo.remitente.direccion}
                onChange={handleNestedChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Sección Destinatario */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-3">Datos del Destinatario</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinatario.nombre">
                Nombre *
              </label>
              <input
                type="text"
                id="destinatario.nombre"
                name="destinatario.nombre"
                placeholder="Nombre completo"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nuevo.destinatario.nombre}
                onChange={handleNestedChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinatario.telefono">
                Teléfono
              </label>
              <input
                type="tel"
                id="destinatario.telefono"
                name="destinatario.telefono"
                placeholder="Teléfono"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nuevo.destinatario.telefono}
                onChange={handleNestedChange}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destinatario.direccion">
                Dirección *
              </label>
              <input
                type="text"
                id="destinatario.direccion"
                name="destinatario.direccion"
                placeholder="Dirección completa"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nuevo.destinatario.direccion}
                onChange={handleNestedChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Dimensiones */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">Dimensiones del Paquete</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dimensiones.alto">
                Alto (cm)
              </label>
              <input
                type="number"
                id="dimensiones.alto"
                name="dimensiones.alto"
                min="0"
                step="0.01"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nuevo.dimensiones.alto}
                onChange={handleNestedChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dimensiones.ancho">
                Ancho (cm)
              </label>
              <input
                type="number"
                id="dimensiones.ancho"
                name="dimensiones.ancho"
                min="0"
                step="0.01"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nuevo.dimensiones.ancho}
                onChange={handleNestedChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dimensiones.largo">
                Largo (cm)
              </label>
              <input
                type="number"
                id="dimensiones.largo"
                name="dimensiones.largo"
                min="0"
                step="0.01"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nuevo.dimensiones.largo}
                onChange={handleNestedChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dimensiones.peso">
                Peso (kg)
              </label>
              <input
                type="number"
                id="dimensiones.peso"
                name="dimensiones.peso"
                min="0"
                step="0.01"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nuevo.dimensiones.peso}
                onChange={handleNestedChange}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            disabled={loading}
          >
            {loading ? 'Guardando...' : 'Guardar Paquete'}
          </button>
        </div>
      </form>
      
      {/* Lista de paquetes existentes */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Paquetes Registrados</h2>
        {paquetes.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Guía</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remitente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destinatario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paquetes.map((paquete) => (
                  <tr key={paquete._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{paquete.numeroGuia}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{paquete.remitente.nombre}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{paquete.destinatario.nombre}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        paquete.estado === 'Entregado' ? 'bg-green-100 text-green-800' :
                        paquete.estado === 'En ruta' ? 'bg-blue-100 text-blue-800' :
                        paquete.estado === 'Incidencia' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {paquete.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => borrarPaquete(paquete._id)}
                        className="text-red-600 hover:text-red-900 mr-3"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">No hay paquetes registrados</p>
        )}
      </div>
    </div>
  );
}

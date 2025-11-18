import React, { useState } from "react";
import useRepartidores from "../hooks/useRepartidores";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import FormInput from "../components/ui/FormInput";

const Repartidores = () => {
  const {
    repartidores,
    loading,
    error,
    agregarRepartidor,
    borrarRepartidor,
  } = useRepartidores();

  const [nuevo, setNuevo] = useState({
    nombre: "",
    identificacion: "",
    zona: "",
  });

  const handleChange = (e) => {
    setNuevo({
      ...nuevo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nuevo.nombre || !nuevo.identificacion || !nuevo.zona) return;
    await agregarRepartidor(nuevo);
    setNuevo({ nombre: "", identificacion: "", zona: "" });
  };

  if (loading) return <p className="text-center py-10">Cargando repartidores...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Gestión de Repartidores</h1>
      </div>

      <Card className="p-6">
        <Card.Title>Agregar Nuevo Repartidor</Card.Title>
        <Card.Description className="mt-1">
          Complete el formulario para registrar un nuevo repartidor en el sistema.
        </Card.Description>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormInput
              label="Nombre del repartidor"
              name="nombre"
              type="text"
              placeholder="Ej: Juan Pérez"
              value={nuevo.nombre}
              onChange={handleChange}
              required
            />
            
            <FormInput
              label="Identificación"
              name="identificacion"
              type="text"
              placeholder="Número de identificación"
              value={nuevo.identificacion}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormInput
              label="Zona de entrega"
              name="zona"
              type="text"
              placeholder="Ej: Zona Norte"
              value={nuevo.zona}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              variant="primary"
              className="flex items-center gap-2"
            >
              <PlusIcon className="h-5 w-5" />
              Agregar Repartidor
            </Button>
          </div>
        </form>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title>Lista de Repartidores</Card.Title>
          <Card.Description>
            {repartidores.length} repartidores registrados
          </Card.Description>
        </Card.Header>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Zona
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Acciones</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {repartidores.length === 0 ? (
                <tr>
                  <td colSpan="3" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    No hay repartidores registrados
                  </td>
                </tr>
              ) : (
                repartidores.map((repartidor) => (
                  <tr key={repartidor._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {repartidor.nombre}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {repartidor.zona}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          if (window.confirm('¿Está seguro de eliminar este repartidor?')) {
                            borrarRepartidor(repartidor._id);
                          }
                        }}
                        className="inline-flex items-center gap-1"
                      >
                        <TrashIcon className="h-4 w-4" />
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Repartidores;

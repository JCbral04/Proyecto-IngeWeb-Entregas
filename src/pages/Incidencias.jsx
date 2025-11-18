import { useState } from 'react';

const incidencias = [
  {
    id: 1,
    titulo: 'Paquete dañado',
    descripcion: 'El paquete llegó con daños en la caja',
    fecha: '2023-11-15',
    estado: 'Pendiente',
    prioridad: 'Alta'
  },
  {
    id: 2,
    titulo: 'Retraso en la entrega',
    descripcion: 'El paquete lleva 2 días de retraso',
    fecha: '2023-11-14',
    estado: 'En proceso',
    prioridad: 'Media'
  },
  {
    id: 3,
    titulo: 'Dirección incorrecta',
    descripcion: 'La dirección de entrega es incorrecta',
    fecha: '2023-11-13',
    estado: 'Resuelta',
    prioridad: 'Baja'
  }
];

const Incidencias = () => {
  const [filtro, setFiltro] = useState('Todas');

  const filtrarIncidencias = () => {
    if (filtro === 'Todas') return incidencias;
    return incidencias.filter(incidencia => incidencia.estado === filtro);
  };

  const getBadgeColor = (estado) => {
    switch (estado) {
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'En proceso':
        return 'bg-blue-100 text-blue-800';
      case 'Resuelta':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Gestión de Incidencias</h1>
        <div className="mt-4 sm:mt-0">
          <select
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="Todas">Todas las incidencias</option>
            <option value="Pendiente">Pendientes</option>
            <option value="En proceso">En proceso</option>
            <option value="Resuelta">Resueltas</option>
          </select>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Título
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descripción
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filtrarIncidencias().map((incidencia) => (
                <tr key={incidencia.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {incidencia.titulo}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {incidencia.descripcion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(incidencia.fecha).toLocaleDateString('es-ES')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getBadgeColor(incidencia.estado)}`}>
                      {incidencia.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Incidencias;

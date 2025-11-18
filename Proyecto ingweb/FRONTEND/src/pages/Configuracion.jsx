import { useState } from 'react';

const Configuracion = () => {
  const [formData, setFormData] = useState({
    nombre: 'Admin User',
    email: 'admin@example.com',
    notificaciones: true,
    tema: 'claro',
    idioma: 'es',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la configuración
    alert('Configuración guardada correctamente');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Configuración</h1>
        <p className="mt-1 text-sm text-gray-500">
          Personaliza la configuración de tu cuenta y preferencias.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card p-6 space-y-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Información personal</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Preferencias</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="notificaciones"
                    name="notificaciones"
                    type="checkbox"
                    checked={formData.notificaciones}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="notificaciones" className="font-medium text-gray-700">
                    Recibir notificaciones
                  </label>
                  <p className="text-gray-500">Recibir notificaciones por correo electrónico.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="tema" className="block text-sm font-medium text-gray-700">
                    Tema
                  </label>
                  <select
                    id="tema"
                    name="tema"
                    value={formData.tema}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                  >
                    <option value="claro">Claro</option>
                    <option value="oscuro">Oscuro</option>
                    <option value="sistema">Igual que mi sistema</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="idioma" className="block text-sm font-medium text-gray-700">
                    Idioma
                  </label>
                  <select
                    id="idioma"
                    name="idioma"
                    value={formData.idioma}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                  >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Configuracion;

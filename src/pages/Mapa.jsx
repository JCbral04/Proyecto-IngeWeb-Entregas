import { useState } from 'react';

const Mapa = () => {
  const [location, setLocation] = useState({
    lat: 4.7109,
    lng: -74.0721,
    zoom: 12
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Mapa de Repartos</h1>
      </div>
      
      <div className="card p-6">
        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Vista del mapa</h3>
            <p className="mt-1 text-sm text-gray-500">
              El mapa de seguimiento en tiempo real se mostrará aquí.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapa;

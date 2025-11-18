import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon,
  TruckIcon,
  CubeIcon,
  MapIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Inicio', href: '/', icon: HomeIcon, current: true },
  { name: 'Repartidores', href: '/repartidores', icon: TruckIcon, current: false },
  { name: 'Paquetes', href: '/paquetes', icon: CubeIcon, current: false },
  { name: 'Rastreo', href: '/rastreo', icon: MapIcon, current: false },
  { name: 'Clientes', href: '/clientes', icon: UserGroupIcon, current: false },
  { name: 'Reportes', href: '/reportes', icon: ChartBarIcon, current: false },
  { name: 'Configuración', href: '/configuracion', icon: CogIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="fixed top-4 left-4 z-20 inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Abrir menú</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div
        className={classNames(
          'fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
          'flex flex-col h-screen border-r border-gray-200'
        )}
      >
        <div className="flex h-16 flex-shrink-0 items-center px-4">
          <h1 className="text-xl font-bold text-blue-600">Repartos Rápidos</h1>
          <button
            type="button"
            className="ml-auto rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="sr-only">Cerrar menú</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon
                    className={classNames(
                      isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
          <div className="group block w-full flex-shrink-0">
            <div className="flex items-center">
              <div>
                <div className="flex items-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                    <span className="text-sm font-medium leading-none text-white">AD</span>
                  </span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Administrador
                </p>
                <button
                  type="button"
                  className="text-xs font-medium text-gray-500 group-hover:text-gray-700"
                >
                  Ver perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
// Páginas
import Dashboard from './pages/Dashboard';
import Repartidores from './pages/Repartidores';
import Paquetes from './pages/Paquetes';
import Mapa from './pages/Mapa';
import Incidencias from './pages/Incidencias';
import Configuracion from './pages/Configuracion';
import Rastreo from './pages/Rastreo';
import Reportes from './pages/Reportes';
import Clientes from './pages/Clientes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="paquetes" element={<Paquetes />} />
        <Route path="repartidores" element={<Repartidores />} />
        <Route path="mapa" element={<Mapa />} />
        <Route path="incidencias" element={<Incidencias />} />
        <Route path="configuracion" element={<Configuracion />} />
        <Route path="rastreo" element={<Rastreo />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="clientes" element={<Clientes />} />
      </Route>
    </Routes>
  );
}

export default App;

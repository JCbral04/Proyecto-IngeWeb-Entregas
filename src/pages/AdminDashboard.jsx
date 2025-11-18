import { useState } from "react";
import PaqueteForm from "../components/PaqueteForm";
import PaquetesTable from "../components/PaquetesTable";
import MapaRepartidores from "../components/MapaRepartidores";

const AdminDashboard = () => {
  const [paquetes, setPaquetes] = useState([]);

  const handleAddPaquete = (nuevoPaquete) => {
    setPaquetes([...paquetes, nuevoPaquete]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Panel de Administración
      </h1>

      <PaqueteForm onAddPaquete={handleAddPaquete} />
      <PaquetesTable paquetes={paquetes} />
      <MapaRepartidores />
    </div>
  );
};

export default AdminDashboard;

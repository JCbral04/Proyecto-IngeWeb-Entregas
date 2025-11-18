import { useState } from "react";
import FormularioRastreo from "../components/FormularioRastreo";
import EstadoPaquete from "../components/EstadoPaquete";
import MapaRastreo from "../components/MapaRastreo";

function PaginaRastreo() {
  const [paquete, setPaquete] = useState(null);

  // Datos simulados (mock)
  const mockData = {
    "ABC123": {
      numeroGuia: "ABC123",
      remitente: "Juan Pérez",
      destinatario: "Laura Gómez",
      estado: "En ruta",
      ubicacion: [4.60971, -74.08175], // Bogotá
    },
    "XYZ789": {
      numeroGuia: "XYZ789",
      remitente: "Carlos Ruiz",
      destinatario: "Ana Torres",
      estado: "Entregado",
      ubicacion: [6.25184, -75.56359], // Medellín
    },
  };

  const handleBuscar = (guia) => {
    const encontrado = mockData[guia];
    if (encontrado) {
      setPaquete(encontrado);
    } else {
      alert("No se encontró ningún paquete con ese número de guía");
      setPaquete(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <FormularioRastreo onBuscar={handleBuscar} />
      {paquete && (
        <>
          <EstadoPaquete paquete={paquete} />
          <MapaRastreo ubicacion={paquete.ubicacion} />
        </>
      )}
    </div>
  );
}

export default PaginaRastreo;

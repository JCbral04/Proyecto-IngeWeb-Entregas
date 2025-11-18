function EstadoPaquete({ paquete }) {
  return (
    <div className="bg-white shadow-md rounded p-6 max-w-md mx-auto mt-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">📦 Detalles del paquete</h3>
      <p><strong>N° Guía:</strong> {paquete.numeroGuia}</p>
      <p><strong>Remitente:</strong> {paquete.remitente}</p>
      <p><strong>Destinatario:</strong> {paquete.destinatario}</p>
      <p><strong>Estado:</strong> <span className="text-blue-600">{paquete.estado}</span></p>
    </div>
  );
}

export default EstadoPaquete;

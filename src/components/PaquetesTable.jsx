const PaquetesTable = ({ paquetes }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Lista de Paquetes
      </h2>
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border p-2">N° Guía</th>
            <th className="border p-2">Remitente</th>
            <th className="border p-2">Destinatario</th>
            <th className="border p-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {paquetes.map((paq) => (
            <tr key={paq.id} className="hover:bg-gray-50">
              <td className="border p-2">{paq.id}</td>
              <td className="border p-2">{paq.remitente}</td>
              <td className="border p-2">{paq.destinatario}</td>
              <td className="border p-2">{paq.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaquetesTable;

import { useState } from "react";

function FormularioRastreo({ onBuscar }) {
  const [guia, setGuia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guia.trim()) return alert("Por favor ingrese un número de guía");
    onBuscar(guia);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-6 max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Rastreo de Paquete
      </h2>
      <input
        type="text"
        value={guia}
        onChange={(e) => setGuia(e.target.value)}
        placeholder="Ingrese el número de guía"
        className="border p-2 w-full rounded mb-4"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
      >
        Buscar
      </button>
    </form>
  );
}

export default FormularioRastreo;

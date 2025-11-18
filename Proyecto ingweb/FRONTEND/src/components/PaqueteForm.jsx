import { useState } from "react";

const PaqueteForm = ({ onAddPaquete }) => {
  const [formData, setFormData] = useState({
    remitente: "",
    destinatario: "",
    direccion: "",
    dimensiones: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.remitente || !formData.destinatario) {
      alert("Por favor, completa los campos obligatorios.");
      return;
    }
    onAddPaquete({ ...formData, id: Date.now(), estado: "En preparación" });
    setFormData({
      remitente: "",
      destinatario: "",
      direccion: "",
      dimensiones: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto mb-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
        Registrar Paquete
      </h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="remitente"
          placeholder="Remitente"
          value={formData.remitente}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />
        <input
          type="text"
          name="destinatario"
          placeholder="Destinatario"
          value={formData.destinatario}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />
        <input
          type="text"
          name="dimensiones"
          placeholder="Dimensiones (cm)"
          value={formData.dimensiones}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Agregar Paquete
        </button>
      </div>
    </form>
  );
};

export default PaqueteForm;

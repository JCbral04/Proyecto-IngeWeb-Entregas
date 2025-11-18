import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix para íconos de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const mockRepartidores = [
  { id: 1, nombre: "Carlos", coords: [6.2442, -75.5812] },
  { id: 2, nombre: "María", coords: [4.711, -74.0721] },
  { id: 3, nombre: "Juan", coords: [10.9878, -74.7889] },
];

const MapaRepartidores = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-2 text-center text-gray-700">
        Mapa de Repartidores
      </h2>
      <MapContainer
        center={[6.2442, -75.5812]}
        zoom={6}
        style={{ height: "400px", borderRadius: "12px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {mockRepartidores.map((rep) => (
          <Marker key={rep.id} position={rep.coords}>
            <Popup>Repartidor: {rep.nombre}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapaRepartidores;

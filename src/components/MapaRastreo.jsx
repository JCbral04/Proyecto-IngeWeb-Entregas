import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapaRastreo({ ubicacion }) {
  return (
    <div className="mt-6 max-w-md mx-auto">
      <MapContainer
        center={ubicacion}
        zoom={13}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ubicacion}>
          <Popup>Ubicación actual del paquete</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapaRastreo;

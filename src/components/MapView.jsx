import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
function Mapa() {
    return (
      <MapContainer
        center={[51.505, -0.09]} // Coordenadas iniciales del mapa (latitud, longitud)
        zoom={13} // Nivel de zoom inicial
        style={{ height: '400px', width: '100%' }} // Estilo del mapa
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL del mapa base (puedes usar otros proveedores)
        />
        <Marker position={[51.505, -0.09]}> {/* Coordenadas del marcador (latitud, longitud) */}
          <Popup>
            Ejemplo de marcador en React-Leaflet.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
  
  export default Mapa;
  
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Card from 'react-bootstrap/Card'

function Mapa() {
  return (
    
    <div >
      <Card className="bg-dark text-white" style={{ width: '70%', margin:'5% 15%'}}>
        <MapContainer style={{ height: "600px" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Card>
    </div>
  );
}
export default Mapa;

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

// const [lat, useLat] = useState(51.505);
// const [lon, useLon] = useState(-0.09);

// const GetPosition = () => {
//   navigator.geolocation.getCurrentPosition(
//     sucess => {
//       console.log('sucess :>> ', sucess);
//       useLat(sucess.coords.latitude);
//       useLon(sucess.coords.longitude);
//     },
//     err => {
//       return console.log('err :>> ', err);
//     },
//   );
// };
// GetPosition();

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}></Marker>
    </MapContainer>
  );
};

export default Map;

import { MapContainer, TileLayer } from 'react-leaflet';
// import * as L from 'leaflet';
// import { GestureHandling } from 'leaflet-gesture-handling';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

import ShopMarkers from './ShopMarkers';

const Map = ({ places }) => {
  return (
    <MapContainer
      center={[48.61, 19.45]}
      zoom={7}
      scrollWheelZoom={false}
      className='h-full rounded-md shadow-xl'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <ShopMarkers places={places} />
    </MapContainer>
  );
};

export default Map;

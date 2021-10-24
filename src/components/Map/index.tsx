import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import PetMarker from './PetMarker';

import 'leaflet/dist/leaflet.css';
import { Pet } from '../../types';

interface MapProps {
  pets: Pet[];
}

const Map = ({ pets }: MapProps) => {
  const [position, setPosition] = useState<number[]>();
  const [hasUserLocation, setHasUserLocation] = useState<boolean>(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      location => {
        const { latitude, longitude } = location.coords;

        setHasUserLocation(true);
        setPosition([latitude, longitude]);
      },
      () => {
        setHasUserLocation(false);
        setPosition([-13.8013697, -50.9061335]);
      },
    );
  }, []);

  return (
    <>
      {position ? (
        <MapContainer
          center={[position[0], position[1]]}
          zoom={hasUserLocation ? 16 : 5}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pets.map(pet => (
            <PetMarker key={pet.id} pet={pet} />
          ))}
        </MapContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default Map;

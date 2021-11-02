import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from 'react-leaflet';

import PetMarker from './PetMarker';

import 'leaflet/dist/leaflet.css';
import { Pet } from '../../types';
import { ModalPet } from '../../components/index';
import { LatLngExpression } from 'leaflet';
interface MapProps {
  pets: Pet[];
  user: User;
}
interface User {
  name: string;
  email: string;
}

const Map = ({ pets, user }: MapProps) => {
  const [position, setPosition] = useState<LatLngExpression>();
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
          center={position}
          zoom={hasUserLocation ? 16 : 5}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
          onClick={console.log}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pets.map(pet => (
            <PetMarker key={pet.id} pet={pet} />
          ))}
          <LocationMarker user={user} />
        </MapContainer>
      ) : (
        ''
      )}
    </>
  );
};

function LocationMarker({ user }: { user: User }) {
  const [clickPosition, setClickPosition] = useState(null);
  const [params, setParams] = useState(null);

  const map = useMapEvent('click', event => {
    setParams(event.latlng);
    setClickPosition(event.latlng);
    console.log('event :>> ', event);
  });

  return clickPosition === null ? null : (
    <Marker position={clickPosition}>
      <ModalPet
        latlng={params}
        clearPosition={() => {
          setClickPosition(null);
        }}
        user={user}
      ></ModalPet>
    </Marker>
  );
}
export default Map;

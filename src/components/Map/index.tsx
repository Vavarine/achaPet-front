import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';

import PetMarker from './PetMarker';

import 'leaflet/dist/leaflet.css';
import { Pet } from '../../types';
import { ModalPet } from '../../components/index';
interface MapProps {
  pets: Pet[];
  user: User;
}
interface User {
  name: string;
  email: string;
}

const Map = ({ pets, user }: MapProps) => {
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

  function LocationMarker() {
    const [clickPosition, setClickPosition] = useState(null);
    const [params, setParams] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setParams(e.latlng);
        setClickPosition(e.latlng);
      },
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
          <LocationMarker />
        </MapContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default Map;

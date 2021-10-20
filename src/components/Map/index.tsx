import React, { useState, useEffect } from 'react';
import { icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Doggo from '../../assets/doggo.svg';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [position, setPosition] = useState<number[]>();
  const [hasUserLocation, setHasUserLocation] = useState<boolean>(false);

  const mapIcon = icon({
    iconUrl: '/assets/petLogoBold.png',
    iconSize: [60, 60],
    iconAnchor: [29, 68],
    popupAnchor: [180, -4],
  });

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
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[position[0], position[1]]} icon={mapIcon}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              Juquinha
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default Map;

import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css'

const LeafletMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
    }
  }, []);

  return (
    <div className='leaflet-container'>
    <MapContainer ref={mapRef} center={[39.290440, -76.612328]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[39.290440, -76.612328]}>
        <Popup position={[39.290440, -76.612328]}>
          <div><h5>Canton</h5></div>
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default LeafletMap;

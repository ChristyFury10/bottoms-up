import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css'

const LeafletMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      // Customize the map if needed
      // map.setView([latitude, longitude], zoomLevel);
    }
  }, []);

  return (
    <div className='leaflet-container'>
    <MapContainer ref={mapRef} center={[39.290440, -76.612328]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
    </div>
  );
};

export default LeafletMap;

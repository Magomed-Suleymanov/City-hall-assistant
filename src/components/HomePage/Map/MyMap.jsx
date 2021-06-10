import React from 'react';
import { Map, YMaps } from 'react-yandex-maps';
import './style.css';

function MyMap(props) {
  const mapState = { center: [43.31868548726831, 45.6935787840332], zoom: 14 };

  return (
    <YMaps>
      <Map className="map" state={mapState}>

      </Map>
    </YMaps>
  );
}

export default MyMap;

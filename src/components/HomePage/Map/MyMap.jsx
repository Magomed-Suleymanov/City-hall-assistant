import React from 'react';
import { Map, YMaps } from 'react-yandex-maps';

function MyMap(props) {
  const mapState = { center: [43.31868548726831, 45.6935787840332], zoom: 14 };

  return (
    <YMaps>
      <Map className="map" style={{position: 'absolute', width: '100%', height: '100%'} } state={mapState}>

      </Map>
    </YMaps>
  );
}

export default MyMap;

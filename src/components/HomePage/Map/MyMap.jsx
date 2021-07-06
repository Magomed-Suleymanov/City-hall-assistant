import React from 'react';
import {Map, TypeSelector, YMaps} from 'react-yandex-maps';

function MyMap() {
  const mapState = {
    center: [43.31868548726831, 45.6935787840332],
    zoom: 14,
  };

  return (
    <YMaps>
      <Map
        className="map"
        style={{
          position: 'absolute',
          zIndex: '1',
          width: '100%',
          height: '100%',
        }}
        state={mapState}
      >
          <TypeSelector options={{ float: 'right' }} />
      </Map>
    </YMaps>
  );
}

export default MyMap;

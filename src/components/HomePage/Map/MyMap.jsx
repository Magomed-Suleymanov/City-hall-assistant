import React from 'react';
import {Map, Placemark, SearchControl, TypeSelector, YMaps} from 'react-yandex-maps';

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
          <TypeSelector options={{ float: 'right' }}  />
          <Placemark options={{iconColor: 'red', draggable: true, floatIndex: 200}} geometry={[43.305141, 45.705414]} />
          <Placemark geometry={[43.320681, 45.688962]} />
          <Placemark geometry={[43.315447, 45.690256]} />
          <Placemark geometry={[43.309334, 45.703802]} />
          <Placemark geometry={[43.319170, 45.690690]} />
          <Placemark geometry={[43.320839, 45.682063]} />

          <SearchControl options={{ float: 'left', }}  />
      </Map>
    </YMaps>
  );
}

export default MyMap;

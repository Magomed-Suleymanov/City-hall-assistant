import React from 'react';
import {Map, YMaps} from "react-yandex-maps";
import  './style.css'

function MyMap(props) {
    const mapState = {center: [45.694909, 43.317776], zoom: 10,}

    return (
        <YMaps>
          <Map className='map' state={mapState}>

          </Map>
        </YMaps>
    );
}

export default MyMap;
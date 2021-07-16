import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room';
import { useDispatch, useSelector } from 'react-redux';
import { addStreet, loadStreets } from '../../../redux/actions/auth';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({});

function MyMap() {
  const classes = useStyles();
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 43.31868548726831,
    longitude: 45.6935787840332,
    zoom: 12,
  });

  const streets = useSelector((state) => state.authReducer.streets);
  const dispatch = useDispatch();
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [address, setAddress] = useState('');

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

  const handleAddCLick = (e) => {
    const [lat, long] = e.lngLat;
    dispatch(addStreet(address, long, lat));
    console.log(e);
  };

  useEffect(() => {
    dispatch(loadStreets());
  }, [dispatch]);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/timurkaev/ckqpd1ujo2jau17nw7n786vj7"
      onClick={handleAddCLick}
      doubleClickZoom={false}
    >
      {streets.map((street) => {
        return (
          <div key={street.id}>
            <Marker
              latitude={street.latitude}
              longitude={street.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <RoomIcon
                onClick={() => handleMarkerClick(street.id)}
                style={{
                  color: '#FF0000',
                  fontSize: '30px',
                  cursor: 'pointer',
                }}
              />
            </Marker>
            {street.id === currentPlaceId && (
              <Popup
                latitude={street.latitude}
                longitude={street.longitude}
                onClose={() => setCurrentPlaceId(null)}
                closeButton={true}
                closeOnClick={false}
                anchor="left"
              >
                <Box style={{ marginBottom: '10px', fontSize: '20px' }}>
                  {street.address}
                </Box>
                <Box
                  style={{
                    backgroundImage: `url(${street.url})`,
                    width: '250px',
                    height: '150px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></Box>
              </Popup>
            )}
          </div>
        );
      })}
    </ReactMapGL>
  );
}

export default MyMap;

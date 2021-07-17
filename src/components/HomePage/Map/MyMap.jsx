import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room';
import { useDispatch, useSelector } from 'react-redux';
import { addStreet, loadStreets } from '../../../redux/actions/streets';
import { Box, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";


function MyMap() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 43.31868548726831,
    longitude: 45.6935787840332,
    zoom: 12,
  });

  const streets = useSelector((state) => state.streets.items);
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
  };

  const handleAddPopup = (e) => {
    const [long, lat] = e.lngLat;
    setNewPlace({
      lat,
      long,
    });
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
      onDblClick={handleAddPopup}
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
                  <Link to={'/'}>{street.address}</Link>
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

      {newPlace && (
        <Popup
          latitude={newPlace.lat}
          longitude={newPlace.long}
          onClose={() => setNewPlace(null)}
          closeButton={true}
          closeOnClick={false}
          anchor="left"
        >
          <Box>
            <TextField
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ marginBottom: '15px' }}
              id="standard-basic"
              label="Название улицы"
            />
          </Box>
          <Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleAddCLick}
            >
              Добавить
            </Button>
          </Box>
        </Popup>
      )}
    </ReactMapGL>
  );
}

export default MyMap;
import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactMapGL, {GeolocateControl, Marker, NavigationControl, Popup, ScaleControl} from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room';
import { useDispatch, useSelector } from 'react-redux';
import { addStreet, loadStreets } from '../../../redux/actions/streets';
import { Box, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { loadingDefaultImg } from '../../../redux/actions/application';
import { Link } from 'react-router-dom';

function MyMap() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 43.31868548726831,
    longitude: 45.6935787840332,
    zoom: 12,
  });
  const streets = useSelector((state) => state.streets.items);
  const list = useSelector((state) => state.application.items);
  const defaultImg = useSelector((state) => state.application.defaultImg);
  const loading = useSelector((state) => state.streets.loading);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [address, setAddress] = useState('');

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

  const closePopup = () => {
    setNewPlace(null);
  };

  const handleAddCLick = (e) => {
    dispatch(addStreet(address, newPlace.lat, newPlace.long));
    window.location.reload();
    closePopup();
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

  useEffect(() => {
    dispatch(loadingDefaultImg());
  }, [dispatch]);

  const MAP_TOKEN =
    'pk.eyJ1IjoidGltdXJrYWV2IiwiYSI6ImNrcjlxMW53cDBveWUyd3A4dnE1bnpsZGgifQ.xcTxyr6TROZra6x1TFTqTw';
  const MAP_STYLE = 'mapbox://styles/timurkaev/ckr9p4x0r4hye17m5osn6e2q9';


  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={MAP_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle={MAP_STYLE}
      onDblClick={handleAddPopup}
      doubleClickZoom={false}
      asyncRender={true}
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
                  <Link to={`/list/id/${street.id}`}>
                    <Box width="250px">{street.address}</Box>
                  </Link>
                </Box>
                {street.url ? (
                  <Box
                    style={{
                      backgroundImage: `url(${street.url})`,
                      width: '250px',
                      height: '150px',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                  />
                ) : (
                  defaultImg.map((item) => {
                    return (
                      <Box
                        key={item.id}
                        style={{
                          backgroundImage: `url(${item.url})`,
                          width: '250px',
                          height: '150px',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }}
                      />
                    );
                  })
                )}
              </Popup>
            )}
          </div>
        );
      })}

      {newPlace &&
      (user.token ? (
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
              onClick={handleAddCLick}
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Добавить
            </Button>
          </Box>
        </Popup>
      ) : null)}
    </ReactMapGL>
  );
}

export default MyMap;
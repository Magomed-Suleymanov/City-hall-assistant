import React from 'react';
import { Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import Places from './Places';

const useStyle = makeStyles({
  boxOpen: {
    width: '22%',
    height: '100vh',
    background: 'white',
    boxShadow: '4px 0px 8px 0px rgba(34, 60, 80, 0.2)',
    transform: 'translateX(0%)',
    position: 'inherit',
    zIndex: 100,
    transformOrigin: 'left',
  },
  boxClose: {
    minWidth: 0,
    maxWidth: 0,
    transform: 'translateX(-100%) scaleX(0%)',
    opacity: '0',
  },
  inputBlock: {
    backgroundImage: 'url(https://d-assets.2gis.ru/headerPhotos/city_2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  opBlock: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  input: {
    width: '90%',
    background: 'white',
    borderRadius: '5px',
    position: 'absolute',
    top: '20px',
    left: '5%',
  },
});

function Dashboard() {
  const toggleDashBoard = useSelector(
    (state) => state.application.toggleBlockDashBoard,
  );
  const classes = useStyle();

  return (
    <Box className={!toggleDashBoard ? classes.boxOpen : classes.boxClose}>
      <Box height="120px" className={classes.inputBlock}>
        <Box className={classes.opBlock}>
          <TextField
            className={classes.input}
            id="outlined-size-small"
            variant="outlined"
            placeholder="Поиск"
            size="small"
          />
        </Box>
      </Box>
      <Navigation />
      <Places />
    </Box>
  );
}

export default Dashboard;

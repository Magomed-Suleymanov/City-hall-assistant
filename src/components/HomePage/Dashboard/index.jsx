import React from 'react';
import { Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';

function Dashboard(props) {
  const toggleDashBoard = useSelector(
    (state) => state.application.toggleBlockDashBoard,
  );

  const useStyle = makeStyles({
    boxOpen: {
      width: '24vw',
      minWidth: '12vw',
      height: '100vh',
      background: 'white',
      boxShadow: '4px 0px 8px 0px rgba(34, 60, 80, 0.2)',
      transform: 'translateX(0%)',
      position: 'inherit',
      zIndex: 100,
      transition: '.4s',
      transformOrigin: 'left',
    },
    boxClose: {
      minWidth: 0,
      maxWidth: 0,
      transform: 'translateX(-100%) scaleX(0%)',
      transition: '0.4s',
      opacity: '0',
    },

    inputBlock: {
      backgroundImage:
        'url(' +
        'https://sdelanounas.ru/i/y/2/h/f_Y2hlY2' +
        'hueWF0b2RheS5jb20vaW1hZ2VzL3VwbG9hZHMvM' +
        'jAxOC8wNS8wNC8lRDAlQkIlRDAlQkUlRDAlQkEl' +
        'RDAlQjAlRDAlQkIlRDElODElRDAlQjUlRDElODI' +
        'lRDElOEMuanBnP19faWQ9MTA2NzUy.jpeg)',
      alignItems: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      height: '190px',
    },

    input: {
      width: '90%',
      background: 'white',
      borderRadius: '5px',
      opacity: 0.7,
    },
  });

  const classes = useStyle();

  return (
    <Box className={!toggleDashBoard ? classes.boxOpen : classes.boxClose}>
      <Box className={classes.inputBlock}>
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Поиск"
          variant="outlined"
        />
      </Box>
      <Navigation />
    </Box>
  );
}

export default Dashboard;

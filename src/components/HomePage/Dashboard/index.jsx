import React from 'react';
import { Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

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
      zIndex: '100',
      transform: 'translateX(0%) ',
      transition: '.4s',
      transformOrigin: 'left',
    },
    boxClose: {
      minWidth: 0,
      maxWidth: 0,
      transform: 'translateX(-100%)',
      transition: '0.4s',
      opacity: '0',
    },

    inputBlock: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#299400',
      height: '100px',
    },

    input: {
      width: '90%',
      background: 'white',
      borderRadius: '5px',
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
    </Box>
  );
}

export default Dashboard;

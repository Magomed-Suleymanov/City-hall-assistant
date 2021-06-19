import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { AuthActive } from '../../redux/ducks/auth';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

function ButtonForAuth() {
  const dispatch = useDispatch();
  const useStyle = makeStyles({
    button: {
      background: 'white',
      borderRadius: '8px',
      position: 'absolute',
      zIndex: '2',
      right: '20px',
      top: '22px',
    },
  });
  const classes = useStyle();

  return (
    <Box>
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        startIcon={<ExitToAppIcon />}
        className={classes.button}
        onClick={() => dispatch(AuthActive())}
      >
        <Link to="/login">Войти</Link>
      </Button>
    </Box>
  );
}

export default ButtonForAuth;

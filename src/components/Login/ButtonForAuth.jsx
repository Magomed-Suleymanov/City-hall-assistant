import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { AuthActive } from '../../redux/ducks/auth';

function ButtonForAuth() {
  const dispatch = useDispatch();
  const useStyle = makeStyles({
    button: {
      background: 'white',
      borderRadius: '8px',
      position: 'absolute',
      right: '20px',
      top: '22px',
    },
  });
  const classes = useStyle();

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        startIcon={<ExitToAppIcon />}
        className={classes.button}
        onClick={() => dispatch(AuthActive())}
      >
        Войти
      </Button>
    </div>
  );
}

export default ButtonForAuth;

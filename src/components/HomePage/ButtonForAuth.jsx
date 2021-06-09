import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function ButtonForAuth(props) {
  const useStyle = makeStyles({
    button: {
      borderRadius: '8px',
      position: 'absolute',
      right: '20px',
      top: '20px',
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
      >
        Войти
      </Button>
    </div>
  );
}

export default ButtonForAuth;

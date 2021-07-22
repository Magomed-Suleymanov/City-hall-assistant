import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import Navigation from './index';
import ButtonForAuth from '../../Login/ButtonForAuth';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    zIndex: 200,
    width: '100%',
    boxShadow: '0 0 30px -10px rgba(0,0,0,.2)',
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.95)',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <AppBar
          style={{ zIndex: 0 }}
          position="static"
          color="#fff"
          variant="outlined"
        >
          <Toolbar className={classes.navbar}>
            <Navigation />
            <ButtonForAuth />
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Header;

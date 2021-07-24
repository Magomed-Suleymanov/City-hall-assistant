import React from 'react';
import { Box, Grid } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MapIcon from '@material-ui/icons/Map';
import ReorderIcon from '@material-ui/icons/Reorder';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Box position="relative" left="calc(50% - 80px)">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <BottomNavigationAction
          label="Карта"
          icon={<MapIcon />}
          component={NavLink}
          activeStyle={{ color: '#1976d2' }}
          to="/"
        />
        <BottomNavigationAction
          label="Список"
          icon={<ReorderIcon />}
          component={NavLink}
          activeStyle={{ color: '#1976d2' }}
          to="/list"
        />
      </Grid>
    </Box>
  );
}

export default Navigation;

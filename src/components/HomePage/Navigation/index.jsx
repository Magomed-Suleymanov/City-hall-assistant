import React from 'react';
import { Box, Grid } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MapIcon from '@material-ui/icons/Map';
import ReorderIcon from '@material-ui/icons/Reorder';
import { useHistory } from 'react-router-dom';

function Navigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  return (
    <Box position="relative" left="calc(50% - 80px)">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction
            label="Карта"
            icon={<MapIcon />}
            onClick={() => {
              history.push(`/map`);
            }}
          />
          <BottomNavigationAction
            label="Список"
            icon={<ReorderIcon />}
            onClick={() => {
              history.push(`/list`);
            }}
          />
        </BottomNavigation>
      </Grid>
    </Box>
  );
}

export default Navigation;

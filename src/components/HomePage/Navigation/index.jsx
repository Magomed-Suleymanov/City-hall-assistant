import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MapIcon from '@material-ui/icons/Map';
import { addMap, loadList } from '../../../redux/actions/application';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navigation() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

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
            onClick={() => dispatch(addMap())}
          />
          <BottomNavigationAction
            label="Список"
            icon={<ReorderIcon />}
            onClick={() => dispatch(loadList())}
          />
        </BottomNavigation>
      </Grid>
    </Box>
  );
}

export default Navigation;

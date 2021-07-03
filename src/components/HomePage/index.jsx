import React from 'react';
import Dashboard from './Dashboard';
import ButtonForAuth from '../Login/ButtonForAuth';
import MyMap from './Map/MyMap';
import ToggleDashboard from './Dashboard/ToggleDashboard';
import ListOfStreets from './List/ListOfStreets';
import { useSelector } from 'react-redux';
import ModalItemsList from './List/ModalItemsList';
import Box from '@material-ui/core/Box';

function HomePage() {
  const listVisibility = useSelector(
    (state) => state.application.listVisibility,
  );
  const listModalVisibility = useSelector(
    (state) => state.application.listModalVisibility,
  );

  const mapVisibility = useSelector((state) => state.application.mapVisibility);
  return (
    <Box style={{ display: 'flex' }}>
      {listModalVisibility && <ModalItemsList />}
      <Dashboard />
      <ToggleDashboard />
      {listVisibility && <ListOfStreets />}
      {mapVisibility && <MyMap />}
      <ButtonForAuth />
    </Box>
  );
}

export default HomePage;

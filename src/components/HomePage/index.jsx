import React from 'react';
import Dashboard from './Dashboard';
import ButtonForAuth from '../Login/ButtonForAuth';
import MyMap from './Map/MyMap';
import ToggleDashboard from './Dashboard/ToggleDashboard';
import ListOfStreets from './List/ListOfStreets';
import { useSelector } from 'react-redux';
import ModalItemsList from './List/ModalItemsList';
import Box from '@material-ui/core/Box';
import { Route } from 'react-router-dom';
import Login from '../Login';
import Registration from '../registration';

function HomePage() {
  const token = useSelector((state) => state.users.token);
  const auth = useSelector((state) => state.users.authorizing);

  const listVisibility = useSelector(
    (state) => state.application.listVisibility,
  );
  const listModalVisibility = useSelector(
    (state) => state.application.listModalVisibility,
  );

  let routes;

  if (!token) {
    routes = <Route path={'/auth'} component={Login} />;
  }

  const mapVisibility = useSelector((state) => state.application.mapVisibility);
  return (
    <Box style={{ display: 'flex' }}>
      {routes}
      <Route path="/registration">
        <Registration />
      </Route>
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

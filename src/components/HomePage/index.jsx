import React from 'react';
import Dashboard from './Dashboard';
import ButtonForAuth from '../Login/ButtonForAuth';
import MyMap from './Map/MyMap';
import ToggleDashboard from './Dashboard/ToggleDashboard';
import ListOfStreets from './List/ListOfStreets';
import { useSelector } from 'react-redux';
import ModalItemsList from './List/ModalItemsList';
import Box from '@material-ui/core/Box';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Registration from '../registration'


function HomePage() {
  const listVisibility = useSelector(
    (state) => state.application.listVisibility,
  );
  const listModalVisibility = useSelector(
    (state) => state.application.listModalVisibility,
  );

  const user = useSelector((state) => state.authReducer.user);

  const mapVisibility = useSelector((state) => state.application.mapVisibility);
  return (
    <Box style={{ display: 'flex' }}>
      {!user.token ? (
        <Switch>
          <Route path="/auth" component={Login} />}
          <Route path="/registration" component={Registration} />
        </Switch>
      ) : (
        ''
      )}
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

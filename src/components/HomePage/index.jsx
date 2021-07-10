import React from 'react';
import MyMap from './Map/MyMap';
import ListOfStreets from './List/ListOfStreets';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Registration from '../registration';
import Header from './Navigation/Header';

function HomePage() {
  const listVisibility = useSelector(
    (state) => state.application.listVisibility,
  );

  const user = useSelector((state) => state.authReducer.user);

  const mapVisibility = useSelector((state) => state.application.mapVisibility);
  return (
    <Box>
      {!user.token ? (
        <Switch>
          <Route path="/auth" component={Login} />}
          <Route path="/registration" component={Registration} />
        </Switch>
      ) : (
        ''
      )}
      <Header />
      {listVisibility && <ListOfStreets />}
      {mapVisibility && <MyMap />}
    </Box>
  );
}

export default HomePage;

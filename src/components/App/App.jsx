import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import HomePage from '../HomePage';
import Login from '../Login';
import Registration from '../registration';

function App() {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div className="app">
      {user.token ? (
        <Switch>
          <Route exact path={'/home/:path_?/:path2_?'}>
            <HomePage />
          </Route>
          <Redirect to={'/home'} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path={'/auth/login'}>
            <Login />
          </Route>
          <Route exact path={'/auth/registration'}>
            <Registration />
          </Route>
          <Redirect to={'/auth/login'} />
        </Switch>
      )}
    </div>
  );
}

export default App;

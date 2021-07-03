<<<<<<< HEAD
import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import HomePage from '../HomePage'
import AuthRoutes from './AuthRoutes'
import Login from "../Login";
import Registration from "../Registration";
=======
import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import HomePage from '../HomePage';
import Login from '../Login';
import Registration from '../registration';
>>>>>>> 7d308bfe83d0c921abf1a55fe80798d10d68a0f8

function App() {
  const user = useSelector((state) => state.authReducer.user);

<<<<<<< HEAD
    return (
        <div className="app">
            {user.login !== undefined ? (
                <Switch>
                    <Route exact path={"/home/:path_?/:path2_?"}>
                        <HomePage />
                    </Route>
                    <Redirect to={"/home"} />
                </Switch>
            ) : (
                <Switch>
                    <Route exact path={"/auth/login"}>
                        <Login />
                    </Route>
                    <Route exact path={"/auth/registration"}>
                        <Registration />
                    </Route>
                    <Redirect to={"/auth/login"} />
                </Switch>
            )}
        </div>
    );
=======
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
>>>>>>> 7d308bfe83d0c921abf1a55fe80798d10d68a0f8
}

export default App;

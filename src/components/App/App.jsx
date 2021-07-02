import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import HomePage from '../HomePage'
import AuthRoutes from './AuthRoutes'

function App() {
    const user = useSelector(state => state.authReducer.user);

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
                    <Route exact path={"/auth/:auth_?"}>
                        <AuthRoutes />
                    </Route>
                    <Redirect to={"/auth"} />
                </Switch>
            )}
        </div>
    );
}

export default App;

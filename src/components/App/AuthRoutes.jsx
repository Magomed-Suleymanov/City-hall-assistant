import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../Login/index"
import Registration  from "../Registration/index"


function AuthRoutes(props) {
    return (
        <Switch>
            <Route exact path={"/auth/login"}>
                <Login />
            </Route>
            <Route exact path={"/auth/registration"}>
                <Registration />
            </Route>
            <Redirect to={"/auth/login"} />
        </Switch>
    );
}

export default AuthRoutes;
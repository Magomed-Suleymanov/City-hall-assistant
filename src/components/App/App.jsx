import HomePage from '../HomePage';
import { useDispatch, useSelector } from 'react-redux';
import {Switch, Route, Redirect} from "react-router-dom"
import AuthRoutes from "./AuthRoutes";

function App() {
        const token = useSelector((state) => state.auth.token);
        let routes;

        if (!token) {
            routes = (
                <Switch>
                    <Route path={'/home'} component={HomePage}/>;
                    <Redirect to={'/home'}/>
                </Switch>
            );
        } else {
            routes = (
                <Switch>
                    <Route path="/auth" component={AuthRoutes}/>
                    <Redirect to="/auth"/>
                </Switch>
            );
        }

        return <div className="App">{routes}</div>;
    }

export default App;

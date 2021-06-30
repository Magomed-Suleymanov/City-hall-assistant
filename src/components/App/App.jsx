import HomePage from '../HomePage';
import {useDispatch, useSelector} from 'react-redux';
import Box from '@material-ui/core/Box';
import {Switch, Route, Redirect} from "react-router-dom"
import AuthRoutes from "./AuthRoutes";

function App() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user)

  return (
    <Box className="app">
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
    </Box>
  );
}

export default App;

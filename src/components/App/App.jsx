import HomePage from '../HomePage';
import Login from '../Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { loadUsers } from '../../redux/actions/users'
import { useEffect } from 'react'


function App() {
  const token = useSelector(state => state.users.token);
  const auth = useSelector(state => state.users.authorizing)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path={'/home'} component={HomePage}/>
        <Redirect to={'/home'}/>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path={'/auth'} component={Login}/>
        <Redirect to={'/auth'}/>
      </Switch>
    );
  }

  return <Box className="app">{routes}</Box>;
}

export default App;

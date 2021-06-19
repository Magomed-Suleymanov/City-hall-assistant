import HomePage from '../HomePage';
import Login from '../Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Box from '@material-ui/core/Box';
import {useEffect} from "react";
import {loadUsers} from "../../redux/actions/users";

function App() {
  const modalAuthVisibility = useSelector(
    (state) => state.auth.modalAuthVisibility,
  );

  const token = useSelector(state => state.users.token);
  const auth = useSelector(state => state.users.authorizing)

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(loadUsers())
  }, [dispatch])

  if (token) {
      return (
          <Route to='/home' component={HomePage} />
      )
  }


  return (
    <Box>
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/login' component={Login} />
            <Redirect to='/home' />
        </Switch>
    </Box>
  );
}

export default App;

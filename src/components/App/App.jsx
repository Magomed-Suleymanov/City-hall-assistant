import HomePage from '../HomePage';
import Login from '../Login';
import Registration from '../registration';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';

function App() {
  const modalAuthVisibility = useSelector(
    (state) => state.auth.modalAuthVisibility,
  );
  return (
    <Box>
      <Switch>
        <Route>
          {modalAuthVisibility && <Login />}
          <HomePage />
        </Route>
        <Route>
          <Registration />
        </Route>
      </Switch>
    </Box>
  );
}

export default App;

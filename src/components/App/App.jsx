import HomePage from '../HomePage';
import Login from '../Login';
import Registration from '../registration';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const modalAuthVisibility = useSelector(
    (state) => state.auth.modalAuthVisibility,
  );
  return (
    <div>
      <Switch>
        <Route>
          {modalAuthVisibility && <Login />}
          <HomePage />
        </Route>
        <Route>
          {modalAuth && <Registration/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

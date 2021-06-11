import HomePage from '../HomePage';
import Login from '../Login';
import Registration from '../registration';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const modalAuth = useSelector((state) => state.auth.modalAuthVisible);
  return (
    <div>
      <Switch>
        <Route>
          {modalAuth &&  <Login />}
          <HomePage />
        </Route>
        <Route>
          <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

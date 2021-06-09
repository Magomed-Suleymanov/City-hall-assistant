import HomePage from '../HomePage';
import Login from '../Login';
import Registration from '../registration';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Authorization from '../Login/Authorization';

function App() {
  const modalAuth = useSelector((state) => state.application.modalAuth);
  return (
    <div>
      <Switch>
        <Route>
          {modalAuth && <Authorization />}
          <HomePage />
        </Route>
        <Route>
          <Login />
        </Route>
        <Route>
          <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import HomePage from '../HomePage';
import Login from '../Login';
import Registration from '../registration';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const modalAuthVisibility = useSelector(
    (state) => state.auth.modalAuthVisibility,
  );

  const token = useSelector(state => state.users.token)

  // let routes;
  //
  // if (token) {
  //   routes = (
  //       <Switch>
  //         <Route path='/home' component={HomePage} />
  //           <Redirect to='/home' />
  //       </Switch>
  //   )
  // } else {
  //   routes = (
  //       <Switch>
  //         <Route path='/login' component={Login} />
  //           <Redirect to='/login' />
  //       </Switch>
  //   )
  // }

  return (
    <div>
      <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={modalAuthVisibility && Login} />
          <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;

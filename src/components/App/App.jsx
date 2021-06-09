import HomePage from "../HomePage";
import Login from "../Login";
import Registration from "../registration";
import { Switch, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Switch>
        <Route>
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

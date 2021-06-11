import React  from 'react'
import Dashboard from './Dashboard';
import ButtonForAuth from '../Login/ButtonForAuth';
import MyMap from './Map/MyMap';
import ToggleDashboard from './Dashboard/ToggleDashboard';
import ListFromMap from './List/ListFromMap'

function HomePage(props) {


  return (
    <div style={{ display: 'flex' }}>
      <Dashboard />
      <ToggleDashboard />
      <ListFromMap />
      {/*<MyMap />*/}
      <ButtonForAuth />
    </div>
  );
}

export default HomePage;

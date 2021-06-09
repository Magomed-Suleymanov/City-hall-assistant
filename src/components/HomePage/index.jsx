import React from 'react';
import Dashboard from './Dashboard';
import ButtonForAuth from '../Login/ButtonForAuth';
import MyMap from './Map/MyMap';
import ToggleDashboard from './Dashboard/ToggleDashboard';

function HomePage(props) {
  return (
    <div style={{ display: 'flex' }}>
      <Dashboard />
      <ToggleDashboard />
      <MyMap />
      <ButtonForAuth />
    </div>
  );
}

export default HomePage;

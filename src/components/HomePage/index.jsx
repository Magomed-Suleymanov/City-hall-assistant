import React, { useEffect } from 'react'
import Dashboard from './Dashboard';
import ButtonForAuth from '../Login/ButtonForAuth';
import MyMap from './Map/MyMap';
import ToggleDashboard from './Dashboard/ToggleDashboard';
import { useDispatch } from 'react-redux'

function HomePage(props) {
  const dispatch = useDispatch()

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

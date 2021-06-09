import React from 'react';
import Dashboard from './Dashboard';
import ButtonForAuth from './ButtonForAuth';

function HomePage(props) {
  return (
    <div className="wrapHomePage">
      <Dashboard />
      <ButtonForAuth />
    </div>
  );
}

export default HomePage;

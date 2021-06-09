import React from "react";
import Dashboard from "./Dashboard";
import MyMap from "./Map/MyMap";

function HomePage(props) {
  return (
    <div style={{display: 'flex'}}>
      <Dashboard />
      <MyMap />
    </div>
  );
}

export default HomePage;

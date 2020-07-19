import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Dinner from './dinner.js';
import Resturent from './resturent.js';

function App() {
  return (
    <div className="App">
      {/* <Dinner></Dinner> */}
      <Dinner dishName = "Chicken Karahi" dishType = "Dessi"/>
      <Resturent restName="Bandu Khan" restTime="6:30" restDay="Saturday" />
      <hr/>
      <Dinner dishName = "Chineese Rice" dishType = "Chineese"/>
      <Resturent restName="Salt and Pepeer" restTime="7:00" restDay="Friday" />
    </div>
  );
}

export default App;

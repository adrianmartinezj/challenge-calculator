import React from 'react';
import classes from './App.module.css';
import Calculator from './containers/Calculator';

function App() {
  return (
    <div className={classes.App}>
      <h1>Calculator Challenge</h1>
      <Calculator />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Simon"/>
      <HelloWorld name="Roni"/>
    </div>
  );
};

export default App;
import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Michelle"/>
      <HelloWorld name="Michelle2"/>
    </div>
  );
};

export default App;
import React from 'react';
import './App.css';
import Calculator from './component/calculator';
import History from './component/history/history';

function App() {
  return (
    <div className='app'>
      <Calculator />
      <History />
    </div>
  );
}

export default App;
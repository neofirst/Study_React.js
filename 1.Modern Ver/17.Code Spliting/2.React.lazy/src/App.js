import React, { useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

const SplitMe = React.lazy(()=>import('./SplitMe'));

const App = () =>{
  const [visible, setVisible] = useState(false);

  const onClick =()=>{
    setVisible(true);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        {visible&&<SplitMe />}
      </header>
    </div>
  );
}

export default App;

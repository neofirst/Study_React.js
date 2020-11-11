import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './Mycomponent';
import Counter from './Counter';
import Say from './Say';

const App = () => {
  return (    
    <>
    {/* <MyComponent name = "react">children Value</MyComponent> */}
    <MyComponent name = {"react"} favoriteNumber = {1}>children Value</MyComponent>
    <br/>
    <Counter/>
    <br/>
    <Say/>
    </>
  );
}

export default App;

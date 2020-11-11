import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () =>{
  return (
    <div>
      <p>Component</p>
      <Counter number={0}/>
      <Todos/>
      <hr/>
      <p>Container Component</p>
      <CounterContainer/>
      <TodosContainer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import CounterContainer from './Contailners/CounterContainer';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoListHooks from './components/TodoListHooks';

function App() {
  return (
    <div>
      <CounterContainer />
      <TodoInsert />
      <p>Container List</p>
      <TodoList />
      <p>Hooks List</p>
      <TodoListHooks />
    </div>
  );
}

export default App;

import React from 'react';
import CounterContainer from './containters/CounterContainer';
import TodosContianer from './containters/TodosContainer';
import GithubProfileLoader from './containters/GithubProfileLoader';

function App() {
  return (
    <div>
      <CounterContainer/>
      <TodosContianer/>
      <GithubProfileLoader/>
    </div>
  );
}

export default App;

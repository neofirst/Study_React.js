import React from 'react';
import './App.css';
// import CounterContainer from './Contailners/CounterContainer';
// import TodoInsert from './components/TodoInsert';
// import TodoList from './components/TodoList';
// import TodoListHooks from './components/TodoListHooks';
import GithubProfileLoader from './Contailners/GithubProfileLoader';

// function App() {
//   return (
//     <div>
//       <CounterContainer />
//       <TodoInsert />
//       <p>Container List</p>
//       <TodoList />
//       <p>Hooks List</p>
//       <TodoListHooks />
//       <hr></hr>
//       <GithubProfileLoader />
//     </div>
//   );
// }

const App: React.FC = () => {
  return <GithubProfileLoader />;
};

export default App;

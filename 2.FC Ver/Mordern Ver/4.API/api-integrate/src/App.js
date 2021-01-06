import Users from './components/Users';
import UsersUseReducer from './components/UsersUseReducer';
import UsersAsync from './components/UserAsync';
import UsersReactAsync from './components/UsersReactAsync';
import {UsersProvider} from './Context/UsersContext';
import ContextUsers from './components/ContextUsers';

function App() {
  return (
    <div>
      <Users/>
      <UsersUseReducer/>
      <UsersAsync/>
      <UsersReactAsync/>
      <UsersProvider>
        <ContextUsers/>
      </UsersProvider>
    </div>
  );
}

export default App;

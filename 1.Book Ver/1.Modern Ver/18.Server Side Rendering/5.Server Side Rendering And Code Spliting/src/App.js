import React from 'react';

import {Route} from 'react-router-dom';
import Menu from './components/Menu';

import laodable from '@loadable/component';
const RedPage = laodable(()=>import('./pages/RedPage'));
const BluePage = laodable(()=>import('./pages/BluePage'));
const UsersPage = laodable(()=>import('./pages/UsersPage'));

const App = () =>{
  return (
   <div>
     <Menu/>
     <hr/>
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
   </div>    
  );
}

export default App;

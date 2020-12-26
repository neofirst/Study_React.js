import React from 'react';
import Profile from './Profile';
import {NavLink, Link, Route} from 'react-router-dom';
import RouterHookSample from './RouterHookSample';

const Profiles = () =>{
  return(
    <div>
      <h3>User List</h3>
      <ul>
        <li><Link to="/profiles/neo">neo</Link></li>
        <li>
          <NavLink to="/profiles/homer" 
                   activeStyle={{background:'black', color:'white'}}
          >
            homer
          </NavLink></li>
      </ul>
      <Route 
             path="/profiles" 
             exact 
             render={()=><div>User Select</div>}
      />
      <Route path="/profiles/:username" component={Profile}/>
      <RouterHookSample/>
    </div>
  )
}

export default Profiles;
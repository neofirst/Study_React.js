import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () =>{
  const activeStyle={
    background:'black',
    color:'white'
  }

  return(
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/Neo">Neo</Link>
        </li>
        <li>
          <Link to="/profiles/Neo1">Neo1</Link>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/Neo" active>Neo</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/Neo1">Neo1</NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={()=><div>사용자를 선택하여 주십시오.</div>}
      />
      <Route path="/profiles/:username" component={Profile}/>
      <WithRouterSample/>
    </div>
  )
}

export default Profiles;
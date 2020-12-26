import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <Link to="/History">History Sample</Link>
        </li>
      </ul>
      <hr/>
      {/* 제일 처음을 인식하나 존재하지 않을 경우 마지막까지 확인 */}
      <Switch>
        <Route path="/" component={Home} exact/>
        {/* <Route path="/" component={Home} exact={true}/> */}
        <Route path="/about" component={About}/>
        {/* <Route path="/profiles/:username" component={Profile}/> */}
        <Route path="/profiles" component={Profiles}/>
        <Route path="/history" component={HistorySample}/>
        <Route render={({location})=> (
          <div>
            <h2>Not Found Page.</h2>
            <p>{location.pathname}</p>
          </div>
        )}/>
      </Switch>
    </div>
  );
}

export default App;

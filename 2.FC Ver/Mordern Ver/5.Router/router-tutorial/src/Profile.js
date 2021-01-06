import React from 'react';
import WithRouterSample from './WithRouterSmaple';

const profileData = {
  neo:{
    name: 'neo',
    description: 'react study'
  },
  homer:{
    name: 'homer neo',
    description: 'homer react study'
  }
}

//match 자동으로 넘어온다.
const Profile = ({match}) =>{
  const {username} = match.params;
  const profile = profileData[username];

  if(!profile) return <div>Not Found User1</div>

  return(
    <div>
      <h3>{username}({profile.name})</h3>
      <p>{profile.description}</p>
      <WithRouterSample/>
    </div>
  )
}

export default Profile;
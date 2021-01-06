import React from 'react';

const data={
  Neo:{
    name:'Neo',
    description:'Neos'
  },
  Neo1:{
    name:'Neo1',
    description:'Neos1'
  }
}

const Profile = ({match}) =>{
  const {username} = match.params;
  const profile = data[username];
  if(!profile){
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return(
    <div>
      <h3>{username}({profile.name})</h3>
      <p>{profile.description}</p>
    </div>
  )
}

export default Profile;
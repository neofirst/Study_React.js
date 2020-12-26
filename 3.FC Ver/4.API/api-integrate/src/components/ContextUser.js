import React, {useEffect} from 'react';
import { getUser, useUsersDispatch, useUsersState } from '../Context/UsersContext';

const ContextUser = ({id}) =>{
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(()=>{
    getUser(dispatch, id);
  },[dispatch, id])

  const {loading, data: user, error} = state.user;

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (!user) {
    return null;
  }
  
  return (
    <div>
      <h2>React-Context</h2>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default ContextUser;
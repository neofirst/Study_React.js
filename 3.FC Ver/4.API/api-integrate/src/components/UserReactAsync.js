import React from 'react';
import axios from 'axios';
import {useAsync} from 'react-async';

const getUser = async ({id}) =>{
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

const UserReactAsync = ({id}) =>{
  const {
    data: user,
    error,
    loading
  } = useAsync({
    propmiseFn: getUser,
    id,
    watch: id,
  });

  
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
      <h2>React-Async</h2>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default UserReactAsync;
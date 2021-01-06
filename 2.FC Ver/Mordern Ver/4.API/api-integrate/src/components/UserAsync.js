import React, {useState} from 'react';
import axios from 'axios';
import useAsync from '../hooks/useAsync';
import User from '../components/User';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}
const UserAsync = () => {
    const [state, refetch] = useAsync(getUsers, [], true);
    const [userId, setUserId] = useState(null);

    const {loading, data: users, error } = state;

    if (loading) {
      return (<div>Loading...</div>)
    }
    if (error) {
      return (<div>Error</div>)
    }
    if (!users) {
      return (
        <div>
          <button onClick={refetch}>불러오기(useAsync)</button>
        </div>
      )
    }

    return ( 
      <>
        <ul> {
            users.map(user => 
              <li key = {user.id} onClick={()=>setUserId(user.id)}> 
              ({user.id}){user.username}({user.name})
              </li>)} 
        </ul> 
        <button onClick={refetch}>다시 불러오기(useAsync)</button> 
        {userId && <User id={userId}/>}
      </>
    )
 }

export default UserAsync;
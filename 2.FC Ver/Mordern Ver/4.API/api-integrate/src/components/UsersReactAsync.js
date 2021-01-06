import React, {useState} from 'react';
import axios from 'axios';
import {useAsync} from 'react-async';
import User from '../components/User';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}
const UsersReactAsync = () => {
    const [userId, setUserId] = useState(null);
    const {data:users, error, loading, reload, run} = useAsync({
      //바로 실행 run 제외
       //promiseFn: getUsers 
       //클릭 실행 run 포함
      deferFn: getUsers
    });
    
    if (loading) {
      return (<div>Loading...</div>)
    }
    if (error) {
      return (<div>Error</div>)
    }
    if (!users) {
      return (
        <div>
          {/* <button onClick={reload}>불러오기(react-async)</button> */}
          <button onClick={run}>불러오기(react-async)</button>
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
        <button onClick={reload}>다시 불러오기(react-async)</button> 
        {userId && <User id={userId}/>}
      </>
    )
 }

export default UsersReactAsync;
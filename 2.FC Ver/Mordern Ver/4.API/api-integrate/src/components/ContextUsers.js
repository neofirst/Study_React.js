import React, {useState} from 'react';
import ContextUser from '../components/ContextUser';
import { getUsers, useUsersDispatch, useUsersState } from '../Context/UsersContext';

const ContextUsers = () => {
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const {loading, data: users1, error} = state.users;

    const fetchData = () =>{
      getUsers(dispatch);
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error</div>;
    }
    if (!users1) {
      return <button onClick={fetchData}>불러오기(Context)</button>;
    }

    return ( 
      <div>
      <ul>
        {users1.map(user => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <ContextUser id={userId} />}
    </div>
    )
 }

export default ContextUsers;
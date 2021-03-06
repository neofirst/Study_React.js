import React, {
  useEffect,
  useReducer
} from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
          data: null,
          error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
          data: action.data,
          error: null
      };
    case 'ERROR':
      return {
        loading: false,
          data: null,
          error: action.error
      };
    default:
      return new Error(`Unhandled action type: ${action.type}`);
  }
}

const UsersUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
      loading: false,
      data: null,
      error: null,
    });

    const fetchUsers = async () => {
      dispatch({
        type: 'LOADING'
      });
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        console.log(response.data)
        dispatch({
          type: 'SUCCESS',
          data: response.data
        });
      } catch (e) {
        dispatch({
          type: 'ERROR',
          error: e
        });
      }
    };

    useEffect(() => {
      fetchUsers();
    }, [])

    const {
      loading,
      data:users,
      error
    } = state;

    if (loading) {
      return (<div>Loading...</div>)
    }
    if (error) {
      return (<div>Error</div>)
    }
    if (!users) {
      return null;
    }

    return ( 
      <>
        <ul> {
            users.map(user => 
              <li key = {user.id}> 
              {user.username}({user.name})
              </li>)} 
        </ul> 
        <button onClick={fetchUsers}>다시 불러오기(useReducer)</button> 
      </>
          )
      }

export default UsersUseReducer;
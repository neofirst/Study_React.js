import React, {createContext, useReducer, useContext} from 'react';
import axios from 'axios';
import * as api from '../api/api';
import {createAsyncDispatcher, initialAsyncState, createAsyncHandler} from '../asyncAction/asyncActionUtils';

// const initialState={
//   users:{
//     loading: false,
//     data: null,
//     error: null
//   },
//   user:{
//     loading: false,
//     data: null,
//     error: null
//   }
// }

// const loadingState ={
//   loading : true,
//   data: null,
//   error: null
// }

// const success = (data)=>({
//   loading: false,
//   data,
//   error: null
// })

// const error = (e) => ({
//   loading: false,
//   data: null,
//   error: e
// })

// const usersReducer = (state, action) =>{
//   switch(action.type){
//     case 'GET_USERS':
//       return{
//         ...state,
//         users: loadingState,
//       }
//     case 'GET_USERS_SUCCESS':
//       return{
//         ...state,
//         users: success(action.data)
//       }
//     case 'GET_USERS_ERROR':
//       return{
//         ...state,
//         users: error(action.error)
//       }
//     case 'GET_USER':
//       return{
//         ...state,
//         user: loadingState,
//       }
//     case 'GET_USER_SUCCESS':
//       return{
//         ...state,
//         user: success(action.data)
//       }
//     case 'GET_USER_ERROR':
//       return{
//         ...state,
//         user: error(action.error)
//       }
//     default:
//       throw new Error('Unhandled action type', action.type)
//   }
// }

const initialState={
  users: initialAsyncState,
  user: initialAsyncState
}
const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');
const usersReducer = (state, action) =>{
  switch (action.type) {
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
      return usersHandler(state, action);
    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
      return userHandler(state, action);
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export const UsersProvider = ({children}) =>{
  const [state,dispatch] = useReducer(usersReducer, initialState);
  return(
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>  
    </UsersStateContext.Provider>
  )
}

export const useUsersState = () =>{
  const state = useContext(UsersStateContext);
  if(!state){
    throw new Error('Cannot find UserProvider');
  }
  return state;
}

export const useUsersDispatch = () =>{
  const dispatch = useContext(UsersDispatchContext);
  if(!dispatch){
    throw new Error('Cannot find UserProvider');
  }
  return dispatch;
}

// export const getUsers = async (dispatch) =>{
//   dispatch({type:'GET_USERS'});
//   try{
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
//     dispatch({type:'GET_USERS_SUCCESS', data: response.data});
//   }
//   catch(e){
//     dispatch({type:'GET_USERS_ERROR', data: e.error});
//   }
// }

// export const getUser = async (dispatch, id) =>{
//   dispatch({type:'GET_USER'});
//   try{
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     dispatch({type:'GET_USER_SUCCESS', data: response.data});
//   }
//   catch(e){
//     dispatch({type:'GET_USER_ERROR', data: e});
//   }
// }

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);
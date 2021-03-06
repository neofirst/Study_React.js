import {handleActions} from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

//lib createRequestThunk 구현 사용 전
// export const getPost = id => async dispatch=>{
//   dispatch({type:GET_POST});
//   try{
//     const response = await api.getPost(id);
//     dispatch({
//       type:GET_POST_SUCCESS,
//       payload:response.data
//     })
//   }catch(e){
//     dispatch({
//       type:GET_POST_FAILURE,
//       payload:e,
//       error:true
//     })
//     throw e;
//   }
// }

// export const getUsers = () => async dispatch =>{
//   dispatch({type:GET_USERS});
//   try{
//     const response = await api.getUsers();
//     dispatch({
//       type:GET_USERS_SUCCESS,
//       payload:response.data
//     })
//   }catch(e){
//     dispatch({
//       type:GET_USERS_FAILURE,
//       payload:e,
//       error:true
//     })
//     throw e;
//   }  
// }

//lib createRequestThunk 구현 사용
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initailState={
  post:null,
  users:null
}

const sample = handleActions({
  [GET_POST_SUCCESS]:(state, action)=>({
    ...state,
    loading:{
      ...state.loading,
      GET_POST:false
    },
    post:action.payload
  }),
  [GET_USERS_SUCCESS]:(state, action)=>({
    ...state,
    loading:{
      ...state.loading,
      GET_USERS:false
    },
    users:action.payload
  })
}, initailState)

export default sample;
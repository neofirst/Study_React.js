import {handleActions, createAction} from 'redux-actions';
import * as api from '../lib/api';
import {delay, put, takeEvery, takeLatest, call} from 'redux-saga/effects'
import {startLoading, finishLoading} from './loading';
import createRequestSaga from '../lib/createRequestSaga';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, id=>id);
export const getUsers = createAction(GET_USERS);

// lib createRequestSaga 사용 전
// function* getPostSaga(action){
//   yield put(startLoading(GET_POST));
//   try{
//     const post = yield call(api.getPost, action.payload);
//     yield put({
//       type:GET_POST_SUCCESS,
//       payload:post.data
//     })
//   }catch(e){
//     yield put({
//       type:GET_POST_FAILURE,
//       payload:e,
//       error:true
//     })
//   }
//   yield put(finishLoading(GET_POST));
// }

// function* getUsersSaga(){
//   yield put(startLoading(GET_USERS));
//   try{
//     const users = yield call(api.getUsers);
//     yield put({
//       type:GET_USERS_SUCCESS,
//       payload:users.data
//     })
//   }catch(e){
//     yield put({
//       type:GET_USERS_FAILURE,
//       payload:e,
//       error:true
//     })
//   }
//   yield put(finishLoading(GET_USERS));
// }


// lib createRequestSaga 사용 후
export const getPostSaga = createRequestSaga(GET_POST, api.getPost);
export const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga(){
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initailState={
  post:null,
  users:null
}

const sample = handleActions({
  [GET_POST_SUCCESS]:(state, action)=>({
    ...state, 
    // loading:{
    //   ...state.loading,
    //   GET_POST:false
    // },
    post:action.payload
  }),
  [GET_USERS_SUCCESS]:(state, action)=>({
    ...state,
    // loading:{
    //   ...state.loading,
    //   GET_USERS:false
    // },
    users:action.payload
  })
}, initailState)

export default sample;
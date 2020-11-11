import {createAction, handleActions} from 'redux-actions';

import createRequestSaga,{createRequestActionTypes} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import {takeLatest} from 'redux-saga/effects';

//리덕스
const INITALIZE = 'write/INITALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

//수정 리덕스 시 사용
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST'

export const initialize = createAction(INITALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key,value})=>({
  key,
  value,
}))
export const setOriginalPost = createAction(SET_ORIGINAL_POST, post=>post);

//api 리덕스 사가
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes('write/WRITE_POST');

export const writePost = createAction(WRITE_POST, ({title, body, tags})=>({
  title,
  body,
  tags,
}));

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* wirteSaga(){
  yield takeLatest(WRITE_POST, writePostSaga);
}
const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] = createRequestActionTypes('write/UPDATE_POST');

export const updatePost = createAction(WRITE_POST, ({id, title, body, tags})=>({
  id, 
  title,
  body,
  tags,
}));

const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);
export function* writeSaga(){
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState={
  title:'',
  body:'',
  tags:[],
  post:null,
  postError:null,
  OriginalPostId:null
}

const write=handleActions(
  {
    [INITALIZE]:state=>initialState,
    [CHANGE_FIELD]:(state, {payload:{key, value}})=>({
      ...state,
      [key]:value
    }),
    [WRITE_POST]:state=>({
      ...state,
      post:null,
      postError:null,
    }),
    [WRITE_POST_SUCCESS]:(state, {payload:post})=>({
      ...state,
      post,
    }),
    [WRITE_POST_FAILURE]:(state, {payload:postError})=>({
      ...state,
      postError,
    }),
    [SET_ORIGINAL_POST]:(state, {payload:post})=>({
      ...state,
      title:post.title,
      body:post.body,
      tags:post.tags,
      originalPostId:post._id,
    }),
    [UPDATE_POST_SUCCESS]:(state, {payload:post})=>({
      ...state,
      post,
    }),
    [UPDATE_POST_FAILURE]:(state, {payload:postError})=>({
      ...state,
      postError,
    }),
  }, initialState
)

export default write;
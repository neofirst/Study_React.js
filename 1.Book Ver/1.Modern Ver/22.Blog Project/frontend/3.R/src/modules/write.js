import {createAction, handleActions} from 'redux-actions';

import createRequestSaga,{createRequestActionTypes} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import {takeLatest} from 'redux-saga/effects';

//리덕스
const INITALIZE = 'write/INITALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

export const initialize = createAction(INITALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key,value})=>({
  key,
  value,
}))

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

const initialState={
  title:'',
  body:'',
  tags:[],
  post:null,
  postError:null,
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
  }, initialState
)

export default write;
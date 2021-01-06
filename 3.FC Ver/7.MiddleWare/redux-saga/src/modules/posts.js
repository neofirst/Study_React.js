import * as api from '../api/posts';
import { reducerUtils, handleAsyncActions, handleAsyncActionsById, createPromiseSaga, createPromiseSagaById } from '../lib/asyncUtils';
//select 사가 상태 조회
import {takeEvery, getContext, select} from 'redux-saga/effects';

//액션
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST';

const GO_TO_HOME = 'GO_TO_HOME';

const PRINT_STATE = 'PRINT_STATE';

export const getPosts = () => ({type: GET_POSTS});
//payload : 파라미터 용도, meta : 리듀서 처리 용도
export const getPost = id => ({
  type: GET_POST, 
  payload: id, 
  meta: id
});

// function* getPostsSaga(){
//   try{
//     const posts = yield call(api.getPosts);
//     yield put({
//       type:GET_POSTS_SUCCESS,
//       payload: posts
//     })
//   }
//   catch(e){
//     yield put({
//       type:GET_POSTS_ERROR,
//       payload: e,
//       error: true,
//     })
//   }
// }
const getPostsSaga = createPromiseSaga(GET_POSTS, api.getPosts);

// function* getPostSaga(action){
//   const id = action.payload;
//   try{
//     const post = yield call(api.getPost, id);    
//     yield put({
//       type:GET_POST_SUCCESS,
//       payload: post,
//       meta: id
//     })
//   }
//   catch(e){
//     yield put({
//       type:GET_POST_ERROR,
//       payload: e,
//       error: true,
//       meta: id,
//     })
//   }
// }
const getPostSaga = createPromiseSagaById(GET_POST, api.getPost);

export const goToHome = () => ({type: GO_TO_HOME});

export const printState = () =>({type: PRINT_STATE});

function* goToHomeSaga() {
  const history = yield getContext('history');
  history.push('/');
}

function* printStateSaga(){
  const state = yield select(state => state.posts);
  console.log(state);
}

export function* postSaga(){
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSaga);
  yield takeEvery(PRINT_STATE, printStateSaga);
}

//lib/asyncUtils
const initialState = {
  posts: reducerUtils.initial(),
  post: {},
}

// eslint-disable-next-line no-use-before-define
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true);

const posts = (state = initialState, action) =>{
  switch(action.type){
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    case CLEAR_POST:
      return{
        ...state,
        post: reducerUtils.initial()
      }
    default:
      return state;
  }
}
export default posts;
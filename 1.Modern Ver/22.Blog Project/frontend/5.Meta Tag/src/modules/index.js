import {combineReducers} from 'redux';
import auth, {authSaga} from './auth';
import user, {userSaga} from './user';
import loading from './loading';
import {all} from 'redux-saga/effects';
import write,{wirteSaga} from './write';
import post,{postSaga} from './post';
import posts,{postsSaga} from './posts';

const rootReducer=combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
});

export function* rootSaga(){
  yield all([authSaga(), userSaga(), wirteSaga(), postSaga(), postsSaga()]);
}
export default rootReducer;
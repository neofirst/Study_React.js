import {combineReducers} from 'redux';
import auth, {authSaga} from './auth';
import user, {userSaga} from './user';
import loading from './loading';
import {all} from 'redux-saga/effects';
import write,{wirteSaga} from './write';

const rootReducer=combineReducers({
  auth,
  loading,
  user,
  write,
});

export function* rootSaga(){
  yield all([authSaga(), userSaga(), wirteSaga()]);
}
export default rootReducer;
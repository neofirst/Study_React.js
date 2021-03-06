import { combineReducers } from 'redux'
import users, {usersSaga} from './users';
import {all} from 'redux-saga/effects';

export function* rootSaga(){
  yield all([usersSaga()]);
}

const roodReducer = combineReducers({users});

export default roodReducer;

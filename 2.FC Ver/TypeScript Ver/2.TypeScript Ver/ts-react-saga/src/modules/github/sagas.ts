import { getUserProfileAsync, GET_USER_PROFILE } from './actions';
import { takeEvery} from 'redux-saga/effects';
import { getUserProfile } from '../../api/github';
import createAsyncSaga from '../../lib/createAsyncSaga';

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);
export function* githubSaga(){
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
//delay : 대기, put : dispatch
//takeEvery : 들어오는 모든 것 처리, takeLatest : 가장 마지막에 들어온 것만 처리
//takeLeading : 가장 먼저 들어온 것만 처리
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

export const increaseAsync = () => ({type:INCREASE_ASYNC});
export const decreaseAsync = () => ({type:DECREASE_ASYNC});

function* increaseSaga(){
  yield delay(1000);
  //dispatch
  yield put(increase());
}

function* decreaseSaga(){
  yield delay(1000);
  //dispatch
  yield put(decrease());
}

export function* counterSaga(){
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = (state = initialState, action) =>{
  switch(action.type){
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

export default counter;
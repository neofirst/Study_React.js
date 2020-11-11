import {createAction, handleActions} from 'redux-actions';
import {delay, put, takeEvery, takeLatest, select, throttle} from 'redux-saga/effects'

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC, ()=>undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, ()=>undefined);

function* increaseSaga(){
  yield delay(1000);
  yield put(increase());
  const number = yield select(state=>state.counter);//현재 값 가져오기
  console.log(`현재 값 : ${number}`)
}

function* decreaseSaga(){
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga(){
  //모든 액션에 대해서 처리
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  //설정 시간 이후 실행
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  //기존 작업 취소하고 가장 마지막 실행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initailState = 0;

const counter = handleActions(
  {
    [INCREASE]:state=>state+1,
    [DECREASE]:state=>state-1,
  },
  initailState
)

export default counter;
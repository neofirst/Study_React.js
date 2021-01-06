import React from 'react';
import Counter from '../components/Counter';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {increase, decrease, setDiff} from '../modules/counter'

const CounterContainer = () =>{
  //useSelector 상태 조회
  // const {number, diff} = useSelector(state=>({
  //   number:state.counter.number,
  //   diff:state.counter.diff,
  // }));
  // const number = useSelector(state=>state.counter.number);
  // const diff = useSelector(state=>state.counter.diff);
  const {number, diff} = useSelector(state=>({
    number:state.counter.number,
    diff:state.counter.diff,
  }),
  // (left, right)=>{
  //   //갹체의 경우 모두 비교
  //   // return left.diff === right.diff && left.number === right.number
  // }  
  //갹체의 경우 모두 비교
  //
  shallowEqual
  );

  const dispatch = useDispatch();
  const onIncrease = () =>{
    dispatch(increase());
  }
  const onDecrease = () =>{
    dispatch(decrease());
  }
  const onSetDiff = diff =>{
    dispatch(setDiff(diff));
  }
  return <Counter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff}/>
}

export default CounterContainer;
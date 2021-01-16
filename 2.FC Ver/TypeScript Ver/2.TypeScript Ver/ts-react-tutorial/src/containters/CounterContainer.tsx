import React from 'react';
import Counter from '../components/Counter';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../modules/index';
import { increase, decrease, increase_by } from '../modules/counter';

const CounterContainer = () =>{
  const count = useSelector((state:RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () =>{
    dispatch(increase());
  }
  
  const onDecrease = () =>{
    dispatch(decrease());
  }
  
  const onIncreaseBy = (diff:number) =>{
    dispatch(increase_by(5));
  }

  return(
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} onIncreaseBy={onIncreaseBy}/>
  )
}

export default CounterContainer
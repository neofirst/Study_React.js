import React from 'react';
import { useSampleState, useSampleDispatch } from './SampleContext';

const ContextSample = () =>{
  const state = useSampleState();
  const dispatch = useSampleDispatch();
  
  const setCount = () =>{
    dispatch({type:'SET_COUNT', count: 5})
  }
  
  const setText = () =>{
    dispatch({type:'SET_TEXT', text: 'text'})
  }
  
  const setColor = () =>{
    dispatch({type:'SET_COLOR', color: 'yellow'})
  }
  
  const setToggle = () =>{
    dispatch({type:'TOGGLE_GOOD'})
  }

  return(
    <div>
      <p>
        <code>Count : </code>{state.count}
      </p>
      <p>
        <code>Text : </code>{state.text}
      </p>
      <p>
        <code>Color : </code>{state.color}
      </p>
      <p>
        <code>Toggle : </code>{state.isGood ? 'true' : 'false' }
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={setToggle}>TOGGLE_GOOD</button>
      </div>
    </div>
  )
}

export default ContextSample;

import React, {useReducer} from 'react';

function reducer(state, action){
  return{
    ...state,
    [action.name]:action.value
  }
}

const UseReducerInfo = () =>{
  const [state, dispatch] = useReducer(reducer, {
    name : '', 
    nickname : ''
  })

  const {name, nickname} = state;

  const onChange = e =>{
    dispatch(e.target);
  }

  return(
    <div>
      <input name="name" value={name} onChange={onChange}/>
      <input name="nickname" value={nickname} onChange={onChange}/>
      <div>
        <b>이름 : {name}</b>
      </div>
      <div>
        <b>닉네임 : {nickname}</b>
      </div>
    </div>
  )
}

export default UseReducerInfo;
import React from 'react';
import CustomHooks from './CustomHooks';

const CustomHooksInfo = () =>{
  const [state, onChange] = CustomHooks({
    name:'',
    nickname:''
  });
  
  const {name, nickname} = state;

  return(
    <div>
      <input name = "name" value={name} onChange={onChange}/>
      <input name = "nickname" value={nickname} onChange={onChange}/>
      <div>
        <b>이름 : {name}</b>
      </div>
      <div>
        <b>닉네임 : {nickname}</b>
      </div>
    </div>
  )
}

export default CustomHooksInfo;
import React, {useState, useEffect} from 'react';

const Info = () =>{
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  //배열 내부에 바뀐 대상이 있을 시 처리 하는 내용 입력
  //Unmount에 실행하려면 [] 빈 값
  useEffect(()=>{
    console.log('렌더링 완료!');
    console.log({name,nickname});
  },[name,nickname])

  const onChangeName = e =>{
    setName(e.target.value);
  }
  
  const onChangeNickName = e =>{
    setNickname(e.target.value);
  }

  return(
    <div>
      <input value={name} onChange={onChangeName}/>
      <input value={nickname} onChange={onChangeNickName}/>
      <div>
        <b>이름 : {name}</b>
      </div>
      <div>
        <b>닉네임 : {nickname}</b>
      </div>
    </div>
  )
}

export default Info;
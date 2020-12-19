import {useState,useEffect} from 'react';
import Name from '../components/name';
const test=(props)=>{
  const [name, setName] = useState('neo');

  const handleClickBtn=(val)=>{
    setName(val);
  }
  useEffect(()=>{
    console.log('component did update')
  },[name]);

  return(
    <div>
      <b>{name}</b>
      <Name 
      name={name} 
      // onclickCB={handleClickBtn}
      />
      <button onClick={()=>handleClickBtn('neo1')}>변경</button>
    </div>
  )
}

export default test;
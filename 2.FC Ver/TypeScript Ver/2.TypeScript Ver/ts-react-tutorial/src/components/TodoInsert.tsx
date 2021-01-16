import React, { FormEvent, useState } from 'react';

type TodoInsertProps = {
  onInsert: (text:string) => void;
}

const TodoInsert = ({onInsert}:TodoInsertProps) => {
  const [value, setValue] = useState('');
  const onChnage = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  }
  const onSubmit = (e:FormEvent) =>{
    e.preventDefault();
    onInsert(value);
    setValue('');
  }

  return(
    <form onSubmit={onSubmit}>
      <input placeholder="Input Data" value={value} onChange={onChnage}/>
      <button type="submit">등록</button>
    </form>
  )
}

export default TodoInsert;
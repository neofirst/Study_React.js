import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numbers =>{
  console.log('평균값 계산 중..');
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b)=>a+b);
  return sum / numbers.length;
}

const UseRefSample = () =>{
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);//커서 이동 처리

  const onChange = useCallback(e=>{
    console.log('입력값:', e.target.value);
    setNumber(e.target.value);
  },[])//처음 랜더링 시에만 생성

  const onInsert = useCallback(e=>{
    if(!isNaN(parseInt(number)))
    {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    }
  },[number,list]);//number or list 변경 시에만 생성

  const avg = useMemo(() => getAverage(list), [list])//리스트 배열 내용이 바뀔 때만 호출하여 처리

  return(
    <div>
      <input value={number} onChange={onChange} ref={inputEl}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
      {list.map((value, index)=>(
        <li key={index}>{value}</li>
      ))}
      </ul>
      <div>
        {/*<b>평균값:</b>{getAverage(list)}*/}
        <b>평균값:</b>{avg}
      </div>
    </div>
  )
}

export default UseRefSample;
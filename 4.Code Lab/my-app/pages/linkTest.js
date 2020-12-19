import {useState} from 'react';
import Name from '../components/name';
import Link from 'next/link';
import Router from 'next/router';

const FunctionName=()=>{
  const [userName, setUserName] = useState();

  const handleClickBtn=()=>{
    setUserName('change_prac_neo');
  }
  return(
    <>
      <div>
        페이지 연결
      </div>
    </>
  );
};

export default FunctionName;
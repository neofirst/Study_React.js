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
        <Name
        name={userName}
        />
        <div>
          <button onClick={handleClickBtn}>변경</button>
          <Link href="/linkTest">
            <a>Link 이동</a>
          </Link>
        </div>
          <button onClick={()=>Router.push("/linkTest")}>변경</button>
      </div>
    </>
  );
};

export default FunctionName;
import React,{useState} from 'react';
import './GithubUsernameForm.css';

type GithubUsernameFormProps = {
  onSubmitUsername : (username:string) => void;
}

const GithubUsernameForm = ({onSubmitUsername} : GithubUsernameFormProps)=>{
  const [input, setInput] = useState('');
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    onSubmitUsername(input);
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInput(e.target.value);
  }

  return(
    <form onSubmit={onSubmit} className="GithubUsernameForm">
      <input onChange={onChange} value={input} placeholder="입력"/>
      <button>조회</button>
    </form>
  )
}

export default GithubUsernameForm;
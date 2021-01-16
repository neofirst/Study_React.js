import React from 'react';
import GithubProfileInfo from '../components/GithubProfileInfo';
import GithubUsernameForm from '../components/GithubUsernameForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/index';
import { getUserProfileAsync } from '../modules/github/actions';

const GithubProfileLoader = () =>{
  const {loading, data, error} = useSelector((state:RootState)=> state.github.userProfile);
  const dispatch = useDispatch();

  const onSubmitUsername = (username:string)=>{
    dispatch(getUserProfileAsync.request(username));
  }
  return(
    <>    
      <GithubUsernameForm onSubmitUsername={onSubmitUsername}/>
      {loading && <p style={{textAlign:'center'}}>Now Loading....</p>}
      {error && <p style={{textAlign:'center'}}>error!!!</p>}
      {data && <GithubProfileInfo bio={data.bio} blog={data.blog} name={data.name} thumbnail={data.avatarURL} />}        
    </>
  )
}

export default GithubProfileLoader;
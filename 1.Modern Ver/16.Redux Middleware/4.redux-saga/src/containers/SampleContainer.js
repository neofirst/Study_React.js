import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Sample from '../components/Sample';
import {getPost,getUsers} from '../modules/sample';

const SampleContainer=({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers
})=>{
  
  //lib createRequestThunk 구현 사용 전
  // useEffect(()=>{
  //   getPost(1);
  //   getUsers(1);
  // }, [getPost,getUsers]);

  //lib createRequestThunk 구현 사용 후
  useEffect(()=>{
    const fn = async()=>{
      try{
      await getPost(1);
      await getUsers(1);
      }catch(e){
        console.log(e);
      }
    }
    fn()
  }, [getPost,getUsers]);


  return(
    <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers}/>
  )
}

export default connect(
  ({sample, loading})=>({
    post:sample.post,
    users:sample.users,
    loadingPost:loading.GET_POST,
    loadingUsers:loading.GET_USERS
  }),
  {
    getPost,
    getUsers
  }
)(SampleContainer);
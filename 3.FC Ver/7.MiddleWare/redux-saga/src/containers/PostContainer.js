import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getPost, goToHome, printState } from '../modules/posts';
import { Post } from '../components/Post';
export const PostContainer = ({postId}) =>{

  const {data, loading, error} = useSelector(state => state.posts.post[postId] || {});
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    if(data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch, data])

  if(loading && !data){
    return <div>Now Loaindg...</div>
  }

  if(error){
    return <div>Error</div>
  }

  if(!data){
    return <div>Not Found Data.</div>
  }

  return(
    <>
      <button onClick={()=>dispatch(goToHome())}>Home</button>
      <button onClick={()=>dispatch(printState())}>State</button>
      <Post post={data}/>
    </>
  )
}
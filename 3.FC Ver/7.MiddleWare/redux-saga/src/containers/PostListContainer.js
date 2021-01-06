import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

const PostListContainer = () =>{
  //state.posts.posts -> 리듀서에 연결된 posts 값 접근 -> posts(리듀서).posts(데이터)
  const {data, loading, error} = useSelector(state=> state.posts.posts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);

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
    <PostList posts={data.data}/>
  )
}

export default PostListContainer;
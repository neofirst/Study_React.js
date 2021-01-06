import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getPost, goToHome } from '../modules/posts';
import { Post } from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
export const PostContainer = ({postId}) =>{

  const {data, loading, error} = useSelector(state => state.posts.post[postId] || reducerUtils.initial());
  const dispatch = useDispatch();

  useEffect(() => {
    if(data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch,data])
  
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
      <Post post={data}/>
    </>
  )
}

// import React,{useEffect} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import { getPost, clearPost } from '../modules/posts';
// import { Post } from '../components/Post';
// export const PostContainer = ({postId}) =>{

//   const {data, loading, error} = useSelector(state=>state.posts.post);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPost(postId));
//     return()=>{
//       dispatch(clearPost());
//     }
//   }, [postId, dispatch])
  
//   if(loading){
//     console.log('Loaindg.')
//     return <div>Now Loaindg...</div>
//   }
  
//   if(error){
//     console.log('Error.')
//     return <div>Error</div>
//   }

//   if(!data){
//     console.log('Not Found Data.')
//     return <div>Not Found Data.</div>
//   }

//   return(
//     <Post post={data}/>
//   )
// }
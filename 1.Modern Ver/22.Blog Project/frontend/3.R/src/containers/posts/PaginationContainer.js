import React from 'react';
import qs from 'qs';
import {withRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Pagination from '../../components/posts/Pagination';
// import {listPosts} from '../../modules/posts';

const PaginationContainer = ({location})=>{
  const {lastPage, posts, loading}=useSelector(({posts, loading})=>({
    lastPage:posts.lastPage,
    posts:posts.posts,
    loading:loading['posts/LIST_POST'],
  }));

  if(!posts || loading) return null;
  const {tag,username,page=1} = qs.parse(location.search,{
    ignoreQueryPrefix:true,
  });

  return(
    <Pagination tag={tag} username={username} page={parseInt(page,0)} lastPage={lastPage}/>
  )
}

export default withRouter(PaginationContainer);
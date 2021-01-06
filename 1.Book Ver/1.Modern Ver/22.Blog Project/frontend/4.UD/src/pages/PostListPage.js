import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostsContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostListPage=()=>{
  return (
    <div>
      <HeaderContainer/>
      <PostsContainer/>
      <PaginationContainer/>
    </div>
  )
}

export default PostListPage;
import React from 'react';

export const Post = ({post}) =>{
  const {title, body} = post.data;
  return(
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}
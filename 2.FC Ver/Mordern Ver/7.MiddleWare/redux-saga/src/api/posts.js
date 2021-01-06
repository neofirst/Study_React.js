import axios from 'axios';

export const getPosts = () =>
  axios.get(`https://jsonplaceholder.typicode.com/posts`);
  
export const getPost = id =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
export const getUsers = () =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);

export const getUser = id =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);


  // localhost 측에 api 구축 시 proxy 설정 하고 나면
  // /posts 처럼 해서 사용 가능하다.
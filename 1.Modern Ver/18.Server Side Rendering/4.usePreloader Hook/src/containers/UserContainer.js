import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import User from '../components/User';
import {Preloader} from '../lib/PreloadContext';
import {getUser} from '../modules/users';

const UserContainer=({id})=>{
  const user = useSelector(state=>state.users.user);
  const dispatch = useDispatch();

  Preloader(()=>dispatch(getUser(id)));//서버 사이드 렌더링 시 API 호출
  useEffect(()=>{
    if(user&&user.id===parseInt(id,10)) return;
    dispatch(getUser(id));
  }, [dispatch, id, user]);

  if(!user) return null;
  return <User user={user}/>
};

export default UserContainer;
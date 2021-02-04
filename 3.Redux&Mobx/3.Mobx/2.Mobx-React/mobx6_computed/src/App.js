import React, {useCallback} from 'react';
import { observer, useLocalStore, useObserver, useLocalObservable } from 'mobx-react';
// import { userStore, postStore } from './store';
import useStore from './useStore';
import { action, observable, runInAction } from 'mobx'

// obserable 아닌 props 같은 내용들을 obserable 처리함.
// obserable은 구조화 시키면 그 상태를 해제 처리함.
// import { useAsObservableSource} from 'mobx-react'
const App = () =>{
  const {userStore, postStore } = useStore();
  // Mobx 6.x 부터 useLocalStore -> useLocalObservable로 변경
  const state = useLocalObservable(()=>({
    name: '',
    password: '',
    // onChangeName(e){
    //   runInAction(()=>{
    //     this.name = e.target.value;
    //   })
    // },
    // onChangePassword(e){
    //   this.password = e.target.value;
    // }

    //action을 쓰면 this 상태가 틀려진다. 즉, 클래스와 객체 리터럴일때가 서로 다르다.
    onChangeName:action((e)=>{
      state.name = e.target.value;
    }),
    onChangePassword:action(function(e){
      this.password = e.target.value;
    })
  }));

  const onLogin = useCallback(() => {
    userStore.logIn({
      nickname: 'nickname',
      password: 'password',
    })
  },[]);

  const onLogout = useCallback(() => {
    userStore.logOut();
  },[]);

  // const onChangeName = useCallback(() => {
  //   this.state.name = e.target.value;
  // },[]);

  // const onChangePassword = useCallback(() => {
  //   this.state.password = e.target.value;
  // },[]);

  //useObserver 6.x 이후로 사라짐.
  return (
    <div>
      {userStore.isLoggingIn
        ? <div>로그인 중</div>
        : userStore.data
          ? <div>{userStore.data.nickname}</div>
          : '로그인 해주세요.'}
      {!userStore.data
        ? <button onClick={onLogin}>로그인</button>
        : <button onClick={onLogout}>로그아웃</button>}
      <div>{postStore.postLength}</div>
      <input value={state.name} onChange={state.onChangeName} />
      <input value={state.password} type="password" onChange={state.onChangePassword}  />
    </div>
  )

  // return useObserver(()=>(
  //   <div>
  //     {userStore.isLoggingIn
  //       ? <div>로그인 중</div>
  //       : userStore.data
  //         ? <div>{userStore.data.nickname}</div>
  //         : '로그인 해주세요.'}
  //     {!userStore.data
  //       ? <button onClick={onLogin}>로그인</button>
  //       : <button onClick={onLogout}>로그아웃</button>}
  //     <div>{postStore.postLength}</div>
  //     <input value={state.name} onChange={state.onChangeName} />
  //     <input value={state.password} type="password" onChange={state.onChangePassword}  />
  //   </div>
  // ))
}

//6.x 이후 observer 감싸지 않고 
// export 상에 observer(App) 처리를 한다.
export default observer(App);

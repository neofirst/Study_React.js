const { createStore } = require('redux')

//초기 상태
const initialState = {
  user:null,
  posts:[]
}

//스토어
const store = createStore(reducer, initialState);

//데이터 변경 시 인식.
store.subscribe(()=>{
  console.log('change');
})

//액션 함수
const login = (data) => {
  return{
    //action
    type:'LOG_IN',
    data,
  }
}

const logout = () => {
  return{
    //action
    type:'LOG_OUT',
  }
}

const addPost = (data) =>{
  return{
    type: 'ADD_POST',
    data
  }
}

//하단 부 부터 리액트에서 바뀌는 부분.
store.dispatch(login({
  data:{
    id:1,
    name:'login_id',
    admin:true
  }
}));

console.log(store.getState());

store.dispatch(addPost({
  userId: 1,
  id:1,
  content:'Post Write1',
}));

console.log(store.getState());

store.dispatch(addPost({
  userId: 2,
  id:2,
  content:'Post Write2',
}));

console.log(store.getState());

store.dispatch(logout());

console.log(store.getState());
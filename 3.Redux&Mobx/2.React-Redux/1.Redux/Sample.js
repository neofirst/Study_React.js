const { createStore, applyMiddleware, compose } = require('redux')
const reducer = require('./reducers');
const { login, logout } = require('./actions/user');
const addPost = require('./actions/post');

//초기 상태
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (dispatch) => (action) =>{
  //dispatch라고 생각하면 된다.
  //next(action)
  console.log('action 시작 : ', action);
  dispatch(action);
  console.log('action 끝 : ', action);
}

const thunkMiddleware = (store) => (dispatch) => (action) =>{
  if(typeof action === 'function'){//비동기
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);//동기
}

//enhancer
// const enhancer = compose(
//   applyMiddleware()
// )
const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware );

//스토어
const store = createStore(reducer, initialState, enhancer);

//데이터 변경 시 인식.
store.subscribe(()=>{
  console.log('change');
})

//하단 부 부터 리액트에서 바뀌는 부분.
store.dispatch(login({
  id:1,
  name:'login_id',
  admin:true
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
import { createStore } from 'redux'

const initialState = {
  counter: 0,
  text:'',
  list:[]
};

//액션 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 생성 함수
const increase = () => ({  
  type: INCREASE,
});

const decrease = () =>({  
  type: DECREASE,
});

const changeText = (text) =>({  
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) =>({ 
  type: ADD_TO_LIST,
  item,
});

//리듀서
//초기 상태를 만들 경우 initial 체크 함으로 문제가 생길 수 있음.
const reducer = (state = initialState, action) =>{
  switch(action.type){
    case INCREASE:
      return{
        ...state,
        counter: state.counter + 1
      }
    case DECREASE:
      return{
        ...state,
        counter: state.counter - 1
      }
    case CHANGE_TEXT:
      return{
        ...state,
        text: action.text,
      }
    case ADD_TO_LIST:
      return{
        ...state,
        list: state.list.concat(action.item),
      }
    default: 
      return state;
  }
}

const store = createStore(reducer);

const listener = () =>{
  const state = store.getState();
  console.log(state);  
}

//리스너 구독
const unsubscribe = store.subscribe(listener);
//unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('Hello'));
store.dispatch(addToList({id:1, text:'first'}));

// 콘솔에서 스토어 액션 확인 가능
// window.store = store;
// store.dispatch({type:'INCREMENT'})
// store.dispatch({type:'CHANGE_TEXT', text:'change text'})
// store.dispatch({type:'ADD_TO_LIST', itme: {id:2, text:'add text'}})

//자원 해제
// window.unsubscribe = unsubscribe;
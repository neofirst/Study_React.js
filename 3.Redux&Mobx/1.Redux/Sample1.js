const { createStore } = require('redux')

const reducer = (prevState, action) => {
  switch(action.type){
    case 'CHANGE_COMP_A':
      return{
        ...prevState,
        compA: action.data,
      }
    case 'CHANGE_COMP_B':
      return{
        ...prevState,
        compB: action.data,
      }
    case 'CHANGE_COMP_C':
      return{
        ...prevState,
        compC: action.data,
      }
    default:
      return prevState;
  }
}

const initialState = {
  compA: 'a',
  compB: 12,
  compC: null,
}

const store = createStore(reducer, initialState);

//데이터 변경 시 인식.
store.subscribe(()=>{
  console.log('change');
})
const changeCompA = (data) => {
  return{
    //action
    type:'CHANGE_COMP_A',
    data,
  }
}

console.log(store.getState());

store.dispatch(changeCompA('b'));

console.log(store.getState());

store.dispatch({
  type: 'CHANGE_COMP_A',
  data : 'c'
});

console.log(store.getState());

store.dispatch(changeCompA('b1'));

console.log(store.getState());
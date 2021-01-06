const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

// () create
// (dispatch, getState) 부터가 thunk function
export const increaseAsync = () => (dispatch, getState) =>{
  setTimeout(()=>{
    dispatch(increase());
  },1000);
}

export const decreaseAsync = () => (dispatch, getState) =>{
  setTimeout(()=>{
    dispatch(decrease());
  },1000);
}

const initialState = 0;

const counter = (state=initialState, action) =>{
  switch(action.type){
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

export default counter;
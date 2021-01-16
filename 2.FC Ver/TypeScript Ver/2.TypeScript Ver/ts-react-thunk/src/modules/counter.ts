// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;

// export const increase = () => ({type:INCREASE});
// export const decrease = () => ({type:DECREASE});
// export const increase_by = (diff:number) => ({type:INCREASE_BY, payload: diff});

// type CounterState = {
//   count: number;
// }

// const initialState : CounterState = {
//   count: 0
// }

// type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increase_by>;

// const counter = (state : CounterState = initialState, action : CounterAction) : CounterState => {
//   switch(action.type){
//     case INCREASE:
//       return{
//         count:state.count + 1
//       };
//     case DECREASE:
//     return{
//       count:state.count - 1
//     };
//     case INCREASE_BY:
//     return{
//       count:state.count + action.payload
//     };
//     default: return state;
//   }
// }

// export default counter;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//typesafe-actions
import {
  createAction,
  ActionType,
  createReducer
} from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increase_by = createAction(INCREASE_BY)<number>();

type CounterState = {
  count: number;
}

const initialState : CounterState = {
  count: 0
}

const actions = {increase, decrease, increase_by};
type CounterAction = ActionType<typeof actions>;

// const counter = createReducer<CounterState, CounterAction>(initialState,{
//   [INCREASE]: (state) => ({ count: state.count + 1 }),
//   [DECREASE]: (state) => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
// });

//method chaning

const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, state => ({ count: state.count + 1 }))
  .handleAction(decrease, state => ({ count: state.count - 1 }))
  .handleAction(increase_by, (state,action) =>({ count: state.count + action.payload }));

export default counter;

import {createAction, handleActions} from 'redux-actions';
import producer from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 0;

export const insert = createAction(INSERT, text =>({
  id:id++,
  text,
  done:false
 }));

 export const toggle = createAction(TOGGLE, id => id);
 export const remove = createAction(REMOVE, id => id);

const initialState ={
  input :'',
  todos:[],
}

const todos = handleActions({
  [CHANGE_INPUT]:(state,{payload:input})=>
    producer(state, draft=>{
      draft.input=input;
    }),
  [INSERT]:(state,{payload:todo})=>
    producer(state, draft=>{
      draft.todos.push(todo);
    }),
  [TOGGLE]:(state,{payload:id})=>
    producer(state, draft=>{
      const todo = draft.todos.find(todo=>todo.id === id);
      todo.done=!todo.done;
    }),  
  [REMOVE]:(state,{payload:id})=>
    producer(state, draft=>{
      const index = draft.todos.findIndex(todo=>todo.id === id);
      draft.todos.splice(index,1);
    }),
  },
  initialState);

export default todos;
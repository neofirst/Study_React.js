import React, {createContext, useReducer, useContext, useRef} from 'react';

// const initialTodos=[];

const initialTodos=[
  {
    id:0,
    text:'Todo',
    done:true
  },{
    id:1,
    text:'Todo1',
    done:true
  },{
    id:2,
    text:'Todo2',
    done:false
  },{
    id:3,
    text:'Todo3',
    done:false
  }
];

const todoReducer = (state, action) =>{
  switch(action.type){
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(
        todo => todo.id === action.id ? { ...todo, done: !todo.done }: todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error('Unhandled todoReducer');
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({children}) =>{
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(4);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export const useTodoState = () =>{
  const context = useContext(TodoStateContext);
  if(!context){
    throw new Error('Can not find useTodoState');
  }
  return context;
}

export const useTodoDispatch = () =>{
  const context = useContext(TodoDispatchContext);
  if(!context){
    throw new Error('Can not find useTodoDispatch');
  }
  return context;
}

export const useTodoNextId = () =>{
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find useTodoNextId');
  }
  return context;
}

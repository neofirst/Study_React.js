import React, {useState} from 'react';

export const TodoItem = React.memo(({todo, onToggle}) =>{
  return(
    <li
      style={{
        textDecoration:todo.done ? 'line-through' : 'none'
      }}
      onClick={()=>onToggle(todo.id)}
    >
      {todo.text}
    </li>
  )
});

export const TodoList = React.memo(({todos, onToggle}) =>{
  return(
    <ul>
      {todos && todos.map(todo=> (
        <TodoItem
          key={todo.id} todo={todo} onToggle={onToggle}/>
      ))}
    </ul>
  )
});
 
const Todos = ({todos, onCreate, onToggle}) =>{
  const [text, setText] = useState('');
  const onChange = e =>setText(e.target.value);
  const onSubmit = e =>{
    e.preventDefault();
    onCreate(text);
    setText('');
  }
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} placeholder='입력'/>
        <button type="submit">등록</button>
      </form>
      <TodoList todos = {todos} onToggle = {onToggle}/>
    </div>
  )
}

export default React.memo(Todos);
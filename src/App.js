import './App.css';
import TodoInput from './components/TodoInput';
import { useState } from "react";
import TodoList from './components/TodoList';

function App() {
  const [ListTodo, setListTodo] = useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
    setListTodo([inputText, ...ListTodo]);
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...ListTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  return (
    <div>
      <TodoInput addList={addList}/>
      <h1>TODO</h1>
      <hr/>
      {ListTodo.map((listItem, i)=>{
        return(
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
      })}
    </div>
  );
}

export default App;

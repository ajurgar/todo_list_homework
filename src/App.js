import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { name: "Do the laundry", priority: "Low" },
    { name: "Walk the dog", priority: "High" },
    { name: "Feed the cat", priority: "High" },

  ])
  const [newTodo, setNewTodo] = useState("");
  const [newPriority, setNewPriority] = useState("");


  const todosNodes = todos.map((todo, index) => {

    return <li todo={index}>
      <span> {todo.name}</span>
      <span className={todo.priority}> {todo.priority}</span>
    </li>
  })

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value)
  }

  const updatePriority = (event) => {
    setNewPriority(event.target.value)
  }

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodos = [...todos]
    copyTodos.push({ name: newTodo, priority: newPriority });
    setTodos(copyTodos);
    setNewTodo("");

  }



  return (
    <div className="App">
      <h1> ToDo's </h1>
      <hr></hr>

      <ul>
        {todosNodes}

      </ul>

      <form onSubmit={saveNewTodo}>
        <label htmlFor='new-todo'> Add new todo: </label>
        <input id='text' type="text" value={newTodo} onChange={handleTodoInput} />
        <label htmlFor='highPriority'>High</label>
        <input id="highPriority" name="priority" type="radio" value="High" onChange={updatePriority} />
        <label htmlFor='lowPriority'>Low</label>
        <input id="lowPriority" name="priority" type="radio" value="Low" onChange={updatePriority} />
        <input type="submit" value="Save" />


      </form>
    </div>
  );
}

export default App;

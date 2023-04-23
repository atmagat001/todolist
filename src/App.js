import React, {useState, useEffect} from 'react';
import './App.css';  // importing the app.css file
import Header from './components/Header'; // importing the header component
import Form from './components/Form';  // importing the form component
import Todolist from './components/Todolist'; // importing the todolist component


const App = () => {

  // defining the initial state of the app, and the variables that will be used in the app, and the functions that will be used in the app


  const initialState = JSON.parse(localStorage.getItem('todos')) || [];// this is the initial state of the app, it will be used to store the todos in the local storage


  const [input, setInput] = useState(""); // this is the input state, it will be used to store the input value of the user
  const [todos, setTodos] = useState(initialState); // this is the todos state, it will be used to store the todos of the user
  const [editTodo, setEditTodo] = useState(null); // this is the editTodo state, it will be used to store the todo that the user wants to edit


  useEffect(() => { // this is the useEffect hook, it will be used to store the todos in the local storage
    localStorage.setItem('todos', JSON.stringify(todos)); // this is the localStorage method, it will be used to store the todos in the local storage
  }, [todos]); // this is the dependency array, it will be used to store the todos in the local storage when the todos state changes


  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
            
          />

        </div>

        <div>
          <Todolist
            todos = {todos}
            setTodos = {setTodos}
            setEditTodo = {setEditTodo}

          
          
          />
        </div>
       
       
      </div>

      
    </div>
  );
}

export default App;

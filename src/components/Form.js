import React, {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';




const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) =>  {

    const updateTodo = (title, id, completed) => { // this is the updateTodo method, it will be used to update the todo
      const newTodo = todos.map((todo) =>
        todo.id === id ? {title, id, completed} : todo // if the todo id is equal to the id of the todo that we want to edit, then we will return the new title, id and completed value, otherwise we will return the todo
      );
      setTodos(newTodo);
      setEditTodo("");
      

    }

    useEffect(() => { // this is the useEffect hook, it will be used to set the input value of the user
      if (editTodo) {
        setInput(editTodo.title);
      } else {
        setInput("");
      }
    }, [setInput, editTodo])



    const onInputChange = (e) => {
      setInput(e.target.value); // this is the setInput method, it will be used to set the input value of the user
    }

    const onFormSubmit = (e) => {
      e.preventDefault(); // this is the preventDefault method, it will be used to prevent the default behaviour of the form
      if(!editTodo) {
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]); // this is the setTodos method, it will be used to set the todos array
        setInput('');
      } else {
        updateTodo(input, editTodo.id, editTodo.completed);
      }
      

 
    }

    return (
      <form onSubmit={onFormSubmit}>
        <input 
          type="text" 
          placeholder="Add a todo" 
          className='task-input'
          value={input}
          required
          onChange={onInputChange}

        />

        <button className='button-add' type='submit'>
          {editTodo? 'OK' : 'Add'}
          </button>

      </form>



    )
  
}

export default Form
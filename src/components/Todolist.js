import React from 'react'

function Todolist({todos, setTodos, setEditTodo}) {

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo)=> todo.id !== id))
        
    }

    const handleComplete = ({id}) => {
        setTodos(todos.map((todo) => {
            if(todo.id === id){
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            
            return todo;
            
        }))
    }

  return (
    <div>
        {todos.map((todo) => (
            <li  className='list-item' key = {todo.id}>
                <input 
                    type="text"
                    value={todo.title}
                    className= {`list ${todo.completed ? "complete" : ""}`}
                    onChange={(e) => (e.preventDefault)}

                
                />

                <button className='button-complete' 
                    onClick={() => handleComplete(todo)}
                >
                    <i className='fa fa-check-circle'></i>
                </button>

                <button className='button-edit' 
                    onClick={() => handleEdit(todo)}
                >
                    <i className='fa fa-edit'></i>
                </button>


                <button className='button-delete' 
                    onClick={() => (handleDelete(todo))}
                
                >
                    <i className='fa fa-trash'></i>
                </button>
                    
                
                
            </li>
        ))}


    </div>
  )
}

export default Todolist
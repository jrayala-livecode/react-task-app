import React from 'react'

export const Todo = ({id, text,todos,setTodos, completed}) => {


    //Events
    const deleteHandler = (e) => {
        setTodos(todos.filter( todo => todo.id !== id))
    }

    const completedHandler = (e) => {
        setTodos(todos.map( todo => {
            if (todo.id == id){
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn" onClick={completedHandler}>
                {completed ? <i className="fas fa-check"></i> : <i className="fas fa-times-circle"></i>}
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash" ></i>
            </button>
        </div>
    )
}

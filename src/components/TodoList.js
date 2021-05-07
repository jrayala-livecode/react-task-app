import React, { useState } from 'react'
import {Todo} from './Todo'

export const TodoList = ({todos, setTodos, todoSelector, filter}) => {
    
    function renderTodos(){
        todos.map(todo => {
            if(todo.completed === filter){
                console.log('rendered');
                <Todo text={todo.text} id={todo.id} key={todo.id} todos={todos} setTodos={setTodos} todo={todo} completed={todo.completed}/>
            }
        })
    }

    return (
    <div className="todo-container">
        <ul className="todo-list">
          {
            renderTodos()
          }  
        </ul>
    </div>
    )
}

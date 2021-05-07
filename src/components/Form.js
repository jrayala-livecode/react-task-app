import React, {useState} from 'react'

export const Form = ({setInputText, setTodos, todos, inputText, setFilter}) => {
    
    const [text,setText] = useState("")

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
      e.preventDefault();  
      setTodos([
          ...todos,{text: inputText, completed: false, id: Math.random() * 100000}
        ])
   }

   const filterHandler = (e) => {
     e.preventDefault();
     let option;
     if(e.target.value === 'all'){
       option = undefined;
     }else if(e.target.value === 'completed'){
       option = true;
     }else if(e.target.value === 'uncompleted'){
       option = false;
     }
     setFilter(option);
   }

    return (
    <form onSubmit={submitTodoHandler}>
      <input type="text" className="todo-input" onChange={inputTextHandler} />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={filterHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}

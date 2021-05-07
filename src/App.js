import './App.css';
import './components/Form'
import { Form } from './components/Form';
import { TodoList } from './components/TodoList'
import { useState }  from 'react';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [filter, setFilter] = useState([]);

  return (
    <div className="App">
      <header>  
        <h1>Todo de Joaquín</h1>
      </header>
      <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText} setFilter={setFilter} />
      <TodoList setTodos={setTodos} todos={todos} filter={filter} />
    </div>
  );
}

export default App;

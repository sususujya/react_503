import { useState } from "react";
import TodoList from "./TodoList";
import CreateTodoList from "./CreateTodoList";
import Wrapper from "./Wrapper";

const App = () => {
  const [todolist, setTodolist] = useState([
    { id: 1, content: 'Copy of a Copy of a Copy' },
    { id: 2, content: 'Habit' },
    { id: 3, content: 'Walls' },
  ])



  return (
    <>
      <Wrapper>
        <TodoList todolist={todolist} setTodolist={setTodolist} />
        <CreateTodoList todolist={todolist} setTodolist={setTodolist} />
      </Wrapper>

      {/* {console.log(todolist)}
      {todolist.map(el => <li>{el.content}</li>)} */}

    </>
  )
}

export default App;
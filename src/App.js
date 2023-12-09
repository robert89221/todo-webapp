
import "./App.css";
import TodoList from "./components/TodoList.js";
import NewTodo from "./components/NewTodo.js";
import { useState } from "react";


function App()
{
  const [nextId, setNextId] = useState(0);

  const [list, setList] = useState(Array(0));
  // const list =
  // [
  //   { description: "Do this",
  //     date: "2010-20-30",
  //     isDone: false },
  //   { description: "Do that",
  //     date: "2012-13-14",
  //     isDone: true },
  // ];


  function handleAdd(props)
  {
    const item = { description: "Todo #"+nextId,
                   date: "2001-02-03",
                   isDone: false,
                   id: nextId };
    const newList = [...list];
    newList.push(item);
    setList(newList);
    setNextId(nextId+1);
  }

  function handleDone(id)
  {
    const newList = [...list];
    const i = newList.findIndex((x) => x.id==id);
    newList[i].isDone = !newList[i].isDone;
    setList(newList);
  }


  function handleDelete(id)
  {
    // const newList = [...list];
    // const i = newList.findIndex((x) => x.id==id);
    // newList.splice(i, 1);
    const newList = list.filter((x) => x.id != id);
    setList(newList);
  }



  return (
    <div className="App">
      <header>
        <h1>ToDo App</h1>
      </header>
      <NewTodo addHandler={handleAdd} />
      <TodoList list={list}
                doneHandler={handleDone}
                deleteHandler={handleDelete} />
    </div>
  );
}

export default App;

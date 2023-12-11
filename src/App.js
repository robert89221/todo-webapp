
import "./App.css";
import TodoList from "./components/TodoList.js";
import NewTodo from "./components/NewTodo.js";
import { useState } from "react";


function App()
{
  const [nextId, setNextId] = useState(0);
  const [list, setList] = useState([]);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date(Date.now()).toISOString().substring(0, 10));

  
  const [initOnce, setInitOnce] = useState(true)
  if (initOnce)
  {
    setInitOnce(false);
    const storedList = localStorage.getItem("list");
    if (storedList)
    {
      setList(JSON.parse(storedList));
      setNextId(Number.parseInt(localStorage.getItem("nextId")));
    }
  }


  function handleAdd()
  {
    const item = { description: description,
                   date: date,
                   isDone: false,
                   id: nextId };
    const newList = [...list];
    newList.push(item);
    setList(newList);
    setDescription("");
    setNextId(nextId+1);
    localStorage.setItem("list", JSON.stringify(newList));
    localStorage.setItem("nextId", nextId+1);
  }


  function handleDone(id)
  {
    const newList = [...list];
    const i = newList.findIndex((x) => x.id==id);
    newList[i].isDone = !newList[i].isDone;
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  }


  function handleDelete(id)
  {
    const newList = list.filter((x) => x.id != id);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  }


  return (
    <div className="App">
      <header>
        <h1>ToDo App</h1>
      </header>
      <NewTodo descriptionState={description}
               descriptionHandler={setDescription}
               dateState={date}
               dateHandler={setDate}
               addHandler={handleAdd} />
      <TodoList list={list}
                doneHandler={handleDone}
                deleteHandler={handleDelete} />
    </div>
  );
}

export default App;

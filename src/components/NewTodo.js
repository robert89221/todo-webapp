
import "./NewTodo.css";
import { TodoList } from "../App.js";

export default function NewTodo()
{

  function AddNew()
  {
    const item = {date: "2030", description: "Do something", isDone: false};
    TodoList.push(item);
    console.log(TodoList);
  }

  return (

    <div className="NewTodo">
      Create new ToDo item
      <button onClick={AddNew}>Add</button>
    </div>

  );
}

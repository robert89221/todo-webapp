
import "./NewTodo.css";

export default function NewTodo({addHandler})
{
  return (

    <div className="NewTodo">
      Create new ToDo item
      <button onClick={addHandler}>Add ToDo</button>
    </div>

  );
}

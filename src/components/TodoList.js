
import "./TodoList.css";
import TodoTile from "./TodoTile.js";


export default function TodoList(props)
{
  const {list, doneHandler, deleteHandler} = props;

  function buildItem(item)
  {
    return (
      <li key={item.id}>
        <TodoTile item={item}
                  doneHandler={doneHandler}
                  deleteHandler={deleteHandler} />
      </li>
    );
  }

  return (
    <ul className="TodoList">
      {list.map(buildItem)}
    </ul>
  );
}

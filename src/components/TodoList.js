
import "./TodoList.css";
import TodoTile from "./TodoTile.js";


export default function TodoList(props)
{
  const {list, doneHandler, deleteHandler} = props;

  const sortedList = [...list];
  sortedList.sort((a, b) =>
  {
    if (a.isDone != b.isDone)  return a.isDone ? 1 : -1;
    else                       return a.date < b.date ? -1 : 1;
  });

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
      {sortedList.map(buildItem)}
    </ul>
  );
}

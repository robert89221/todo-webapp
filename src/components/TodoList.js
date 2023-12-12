
import "./TodoList.css";
import TodoTile from "./TodoTile.js";
import { useAutoAnimate } from '@formkit/auto-animate/react'


export default function TodoList(props)
{
  const {list, doneHandler, deleteHandler} = props;
  const [animParent] = useAutoAnimate();

  //  lägg avklarade påminnelser sist, sortera övrigt efter datum

  const sortedList = [...list];
  sortedList.sort((a, b) =>
  {
    if (a.isDone != b.isDone)  return a.isDone ? 1 : -1;
    else                       return a.date < b.date ? -1 : 1;
  });

  //  hjälpfunktion för att bygga en bricka

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
    <ul className="TodoList"
        ref={animParent}>
      {sortedList.map(buildItem)}
    </ul>
  );
}

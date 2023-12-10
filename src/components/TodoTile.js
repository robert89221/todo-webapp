
import "./TodoTile.css";
// import { useState } from "react";

export default function TodoTile(props)
{
  const {item, doneHandler, deleteHandler} = props;
  const {description, date, isDone, id} = item;

  const itemDate = new Date(date);
  const today = new Date(Date.now());
  const dateStr = itemDate.toDateString();
  itemDate.setHours(0);
  itemDate.setMinutes(0);
  itemDate.setSeconds(0);
  itemDate.setMilliseconds(0);
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  let days = Math.trunc((itemDate-today)/(1000*60*60*24));

  const colors = ["red", "red", "orange", "gray", "gray"];

  const whens = [`${dateStr} (${-days} days ago)`,
                 "Yesterday", "Today", "Tomorrow",
                 `${dateStr} (in ${days} days)`];

  days = Math.max(-2, Math.min(days, 2))+2;
  const color = isDone ? "green" : colors[days];
  const when = isDone ? "" : whens[days];

  return (
    <div className="TodoTile"
         style={{backgroundColor: color}}>
      { description }
      <div>
        { when }
      </div>
      <button onClick={() => doneHandler(id)}>Done</button>
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  );
}

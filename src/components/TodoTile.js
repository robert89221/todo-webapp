
import "./TodoTile.css";
// import { useState } from "react";

export default function TodoTile(props)
{
  const {item, doneHandler, deleteHandler} = props;
  const {description, date, isDone, id} = item;
  
  const color = isDone ? "green" : "grey";
  const status = isDone ? "(Done)" : "(Not yet done)";

  return (
    <div className="TodoTile"
         style={{backgroundColor: color}}>
      { description }
      <div>
        { date } { status }
      </div>
      <button onClick={() => doneHandler(id)}>Done</button>
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  );
}

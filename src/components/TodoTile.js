
import "./TodoTile.css";
// import { useState } from "react";

export default function TodoTile({item, doneHandler, deleteHandler})
{
  const {description, date, isDone, id} = item;
  
  const color = isDone ? "green" : "grey";

  return (
    <div className="TodoTile"
         style={{backgroundColor: color}}>
      {id}: { description }<br/>
      <div>
        { date } { isDone ? " (Done)" : " (Not yet done)" }
      </div>
      <button onClick={() => doneHandler(id)}>Done</button>
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  );
}

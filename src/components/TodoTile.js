
import "./TodoTile.css";
import { useState } from "react";

export default function TodoTile(props)
{
  const [color, setColor] = useState("grey");

  function changeColor()
  {
    setColor(color == "red" ? "green" : "red");
  }

  return (
    <div className="TodoTile"
         style={{backgroundColor: color}}>
      { props.description }<br/>
      <div>
        { props.date } { props.isDone ? " (Done)" : " (Not yet done)" }
      </div>
      <button onClick={changeColor}>Toggle</button>
    </div>
  );
}


import "./TodoTile.css";

export default function TodoTile(props)
{
  return (
    <div className="TodoTile">
      Todo tile here<br/>
      { props.date }<br/>
      { props.category }<br/>
      { props.description }<br/>
      { props.isDone ? "Done" : "Not yet done" }<br/>
    </div>
  );
}

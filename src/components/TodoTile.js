
import "./TodoTile.css";


export default function TodoTile(props)
{
  const {item, doneHandler, deleteHandler} = props;
  const {description, date, isDone, id} = item;

  //  normalisera båda datum för att beräkna korrekt antal dagar mellan dem

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

  //  pretty-printa datumet och färglägg efter status

  days = Math.max(-2, Math.min(days, 2))+2;
  const color = isDone ? "green" : colors[days];
  const when = isDone ? "" : whens[days];

  return (
    <div className="TodoTile"
         style={{backgroundColor: color}}>
      <div className="tile-text-container">
        { description }
        <br/><br/>
        { when }
      </div>
      <div className="tile-button-container">
        <a onClick={() => doneHandler(id)}>&#x2713;</a><br/>
        <a onClick={() => deleteHandler(id)}>&#x1f7aa;</a>
      </div>
    </div>
  );
}

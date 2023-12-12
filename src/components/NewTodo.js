
import "./NewTodo.css";

export default function NewTodo(props)
{
  const {descriptionState, descriptionHandler, dateState, dateHandler, addHandler} = props;

  function handleSubmit(x)
  {
    x.preventDefault();
    addHandler();
  }

  return (

    <div className="NewTodo">
      Create a new ToDo item<br/>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Description" value={descriptionState}
               onChange={(x) => descriptionHandler(x.target.value)} required />
        <input type="date" value={dateState}
               onChange={(x) => dateHandler(x.target.value)} />
      </form>
      <div class="button-container">
        <a onClick={addHandler}>&#xff0b;</a>
      </div>
    </div>

  );
}

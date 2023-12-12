
import "./NewTodo.css";


export default function NewTodo(props)
{
  const {descriptionState, descriptionHandler, dateState, dateHandler, addHandler} = props;

  //  hjälpfunktion för att förhindra att sidan laddas om när du trycker enter

  function handleSubmit(x)
  {
    x.preventDefault();
    addHandler();
  }

  return (

    <div className="NewTodo">
      Create a new reminder
      <div className="new-control-container">
        <form class="new-form-container"
              onSubmit={handleSubmit}>
          <input type="text" placeholder="Description" value={descriptionState}
                onChange={(x) => descriptionHandler(x.target.value)} required />
          <br/>
          <input type="date" value={dateState}
                onChange={(x) => dateHandler(x.target.value)} />
        </form>
        <div class="new-button-container">
          <a onClick={addHandler}>&#xff0b;</a>
        </div>
      </div>
    </div>

  );
}

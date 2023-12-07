
import "./App.css";
import TodoTile from "./components/TodoTile.js";
import NewTodo from "./components/NewTodo.js";

let TodoList =
[
  { date: "2000-10-20",
    description: "Do this",
    isDone: false },
  { date: "2001-12-23",
    description: "Do that",
    isDone: false },
];

export { TodoList };

function BuildList()
{

  function Item(props, index)
  {
    return (
      <li key={index}>
        <TodoTile {...props}/>
      </li>
    );
  }

  return (
    <ul className="TodoList">
      { TodoList.map( (item, index) => Item(item, index) ) }
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo App</h1>
      </header>
      <NewTodo/>
      <BuildList/>
    </div>
  );
}

export default App;

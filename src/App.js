
import "./App.css";
import TodoTile from "./components/TodoTile.js";
import NewTodo from "./components/NewTodo.js";

let TodoList =
[
  { date: "2000-10-20",
    category: "Important",
    description: "Don't forget to do the important thing",
    isDone: false },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo App</h1>
      </header>
      <NewTodo/>
      { TodoList.map(TodoTile) }
    </div>
  );
}

export default App;


import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="pt-5 grid justify-items-center">
      <h1 className="text-2xl font-size: 3rem">My Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;

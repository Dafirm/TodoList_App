import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, Appstate } from "../store/store";
import { deleteTodo, completedTodo, sort } from "../store/todosSlice";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TodoList = () => {
  const dispatch: AppDispatch = useDispatch();

  const todoss = useSelector((state: Appstate) => state.todos);
  return (
    <div className="w-full max-w-sm mx-auto mt-10">
      <ul className="w-full">
        {todoss.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-4 bg-gray-200 rounded-lg shadow-md mb-4"
          >
            <label className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(completedTodo(todo.id))}
              />
              <span
                className={`${todo.completed ? "line-through" : ""}`}
              ></span>
              <span className="text-xl">{todo.message}</span>
              <button
                type="button"
                className="todoDelete"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                <RiDeleteBack2Fill />
              </button>
            </label>
          </li>
        ))}
        <button onClick={() => dispatch(sort())}>Sort your list!</button>
      </ul>
    </div>
  );
};

export default TodoList;

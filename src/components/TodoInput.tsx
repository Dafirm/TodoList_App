import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addTodo } from "../store/todosSlice";
import { MdPlaylistAdd } from "react-icons/md";

const TodoInput = () => {
  const dispatch: AppDispatch = useDispatch();
  const [input, setInput] = useState("");
  return (
    <div className="w-full max-w-sm mx-auto mt-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(input));
          setInput("");
        }}
      >
        <div className="mb-4">
          <input
            id="todoInput"
            value={input}
            onChange={(event) => setInput(event.currentTarget.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Add Todo"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <MdPlaylistAdd />
          </button>
        </div>
        {/* <button type="submit">
          <MdPlaylistAdd />
        </button> */}
      </form>
    </div>
  );
};

export default TodoInput;

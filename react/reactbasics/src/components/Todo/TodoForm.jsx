import React, { useState } from "react";
import { useTodo } from "../../Contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex items-center gap-2">
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
        placeholder="Write a Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

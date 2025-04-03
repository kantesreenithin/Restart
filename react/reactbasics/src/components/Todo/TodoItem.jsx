import React, { useState } from "react";
import { useTodo } from "../../Contexts";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <div className="flex items-center justify-between border rounded-lg p-3 bg-white shadow-sm">
      <div className="flex items-center gap-2 w-full">
        <input
          type="checkbox"
          className="cursor-pointer w-5 h-5"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`w-full text-lg bg-transparent outline-none
          ${todo.completed ? "line-through text-gray-400" : "text-black"}
          ${isTodoEditable ? "border-b border-gray-400 px-1" : "border-none"}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          className=" text-white px-3 py-1 rounded-lg transition disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable((prev) => !prev);
            }
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        <button
          className=" text-white px-3 py-1 rounded-lg transition"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

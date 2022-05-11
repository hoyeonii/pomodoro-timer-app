import React from "react";
import { useDrag } from "react-dnd";

function DragnDrop({ todo, i, todoList, setTodoList, handleDelete }) {
  //   console.log(todoList);
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "div",
      item: { todo: todo },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    <div
      key={i}
      className="todo-task"
      ref={drag}
      style={{ border: isDragging ? "5px solid pink" : "" }}
    >
      <input
        className="checkbox"
        type="checkbox"
        id={`checkbox${i}`}
        onChange={() => {
          const list = [];
          todoList.map((todo, index) => {
            index == i
              ? list.push({ ...todo, done: !todo.done })
              : list.push(todo);
          });
          setTodoList(list);
        }}
      ></input>
      <label className="todo-check" for={`checkbox${i}`}>
        ✔
      </label>

      <div
        style={{
          width: "100%",
          textAlign: "left",
          padding: "0px 10px",
        }}
      >
        {todo.task}
      </div>
      <button
        style={{
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => handleDelete(todo.id)}
      >
        x
      </button>
    </div>
  );
}

export default DragnDrop;

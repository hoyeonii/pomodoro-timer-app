import React, { useEffect, useState } from "react";
import "../css/Todo.css";

import EditTask from "./EditTask";
import EditCategory from "./EditCategory";

function Todo() {
  const [modeViewTodo, setmodeViewTodo] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [category, setCategory] = useState("All");
  const [categoryList, setCategoryList] = useState([]);

  return (
    <div className="todo">
      <div className="todo-header">Todo</div>
      <div className="todo-options">
        <div className="todo-category">
          <label
            onClick={() => {
              setmodeViewTodo(true);
              setCategory("All");
            }}
            style={{
              backgroundColor:
                modeViewTodo && category === "All" ? "white" : "transparent",
              color:
                modeViewTodo && category === "All"
                  ? "rgb(255, 65, 65)"
                  : "white",
              opacity: modeViewTodo ? 1 : 0.5,
            }}
          >
            All
          </label>
          {categoryList.map((el) => (
            <label
              onClick={() => {
                setmodeViewTodo(true);
                setCategory(el);
              }}
              style={{
                backgroundColor:
                  modeViewTodo && category === el ? "white" : "transparent",
                color:
                  modeViewTodo && category === el
                    ? "rgb(255, 65, 65)"
                    : "white",
                opacity: modeViewTodo ? 1 : 0.5,
              }}
            >
              {el}
            </label>
          ))}
        </div>
        <label
          onClick={() => {
            setmodeViewTodo(false);
          }}
          style={{
            backgroundColor: !modeViewTodo ? "white" : "transparent",
            color: !modeViewTodo ? "rgb(255, 65, 65)" : "white",
            opacity: !modeViewTodo ? 1 : 0.5,
          }}
        >
          edit
        </label>
      </div>
      {modeViewTodo ? (
        <EditTask
          category={category}
          categoryList={categoryList}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ) : (
        <EditCategory
          categoryList={categoryList}
          setCategoryList={setCategoryList}
        />
      )}
      {/* <button
        onClick={() => {
          console.log(todoList);
        }}
      >
        click me
      </button> */}
    </div>
  );
}

export default Todo;

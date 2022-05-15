import React, { useEffect, useState } from "react";
import ViewTask from "./ViewTask";

function EditTask({ category, categoryList, todoList, setTodoList }) {
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState(category);
  useEffect(() => {
    setSelectedOption(category);
  }, [category]);
  const categoryOptions =
    categoryList.length === 0 ? ["All"] : ["All", ...categoryList];
  const handleAddTask = (e) => {
    if (!text) {
      return;
    }
    setText("");
    setTodoList([
      ...todoList,
      {
        id: new Date().getMilliseconds(),
        task: text,
        done: false,
        category: selectedOption,
      },
    ]);
  };
  return (
    <>
      {todoList.length > 1 && category === "All" && (
        <span className="todo-dndMessage">
          Drag and Drop to change the order
        </span>
      )}
      <div className="todo-list">
        {todoList.length !== 0 ? (
          <ViewTask
            category={category}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ) : (
          <div className="todo-message">You don't have any task yet</div>
        )}
      </div>
      <div className="todo-addTask">
        <form
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <select
            onChange={(e) => {
              e.preventDefault();
              setSelectedOption(e.target.value);
            }}
            value={selectedOption}
            className="todo-select"
          >
            {categoryOptions.map((el) => (
              <option>{el}</option>
            ))}
          </select>
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            className="todo-addTask-input"
            placeholder="Add your task here"
          ></input>
          <input type="submit" style={{ display: "none" }} />
        </form>
        <button
          type="submit"
          // onClick={handleAddTask}
          style={{
            background: "none",
            color: "white",
            border: "1px solid white",
            borderRadius: "50%",
          }}
        >
          +
        </button>
      </div>
      Task{" "}
      {
        todoList
          .filter((todo) =>
            category === "All" ? true : todo.category === category
          )
          .filter((todo) => todo.done == true).length
      }
      /
      {
        todoList.filter((todo) =>
          category === "All" ? true : todo.category === category
        ).length
      }{" "}
      complete
    </>
  );
}

export default EditTask;

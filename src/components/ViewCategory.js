import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ViewCategory({ categoryList, setCategoryList }) {
  const handleDelete = (item) => {
    setCategoryList(categoryList.filter((todo) => todo !== item));
  };

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    var updatedList = [...categoryList];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setCategoryList(updatedList);
  };
  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Droppable droppableId="list-container">
        {(provided) => (
          <div
            className="list-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {categoryList.map((item, index) => (
              <Draggable
                key={index}
                draggableId={"draggable-" + index}
                index={index}
              >
                {(provided) => (
                  <div
                    className="item-container"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    <div key={index} className="todo-task">
                      {/* <input
                        className="checkbox"
                        type="checkbox"
                        id={`checkbox${index}`}
                        onChange={() => {
                          const list = [];
                          categoryList.map((todo, i) => {
                            index == i
                              ? list.push({ ...todo, done: !todo.done })
                              : list.push(todo);
                          });
                          setCategoryList(list);
                        }}
                      ></input>
                      <label
                        className="todo-check"
                        for={`checkbox${index}`}
                        style={{
                          visibility: `${item.done ? "visible" : "hidden"}`,
                          color: "red",
                        }}
                      >
                        ✔
                      </label> */}

                      <div
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "0px 10px",
                        }}
                      >
                        {item}
                      </div>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: "white",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDelete(item)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ViewCategory;

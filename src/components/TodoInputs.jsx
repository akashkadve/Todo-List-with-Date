import { useRef, useContext } from "react";
import { TodoItems } from "../store/todo-items-store";
import "../App.css";

const TodoInputs = () => {
  const { addNewItems } = useContext(TodoItems);

  const inputName = useRef();
  const inputDate = useRef();

  function addData() {
    const todoInput = inputName.current.value;
    const todoDate = inputDate.current.value;
    addNewItems(todoInput, todoDate);
    inputName.current.value = "";
    inputDate.current.value = "";
  }
  return (
    <>
      <div className="col-6">
        <input
          type="text"
          id="inputBox"
          placeholder="Enter Here..."
          ref={inputName}
        />
      </div>
      <div className="col-4">
        <input type="date" id="inputDate" ref={inputDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          onClick={addData}
          className="btn btn-success inpBtn"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default TodoInputs;

import "../App.css";
import { useContext } from "react";
import { TodoItems } from "../store/todo-items-store";

const TodoList = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItems);
  return (
    <>
      <div className="col-6 todo-list">{todoName}</div>
      <div className="col-4 todo-list">{todoDate}</div>
      <div className="col-2 todo-list">
        <button
          type="button"
          className="btn btn-danger todo-Btn"
          onClick={() => deleteItem(todoName)}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default TodoList;

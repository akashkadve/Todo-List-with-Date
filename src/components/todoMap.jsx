import { useContext } from "react";
import { TodoItems } from "../store/todo-items-store";
import TodoList from "./todoList";

const TodoMap = () => {
  const { getData } = useContext(TodoItems);

  return (
    <>
      {getData.map((item) => (
        <TodoList todoName={item.name} todoDate={item.dueDate}></TodoList>
      ))}
    </>
  );
};

export default TodoMap;

import { useContext } from "react";
import { TodoItems } from "../store/todo-items-store";

const Welcome = () => {
  const { getData } = useContext(TodoItems);
  return getData.length === 0 && <h1>Welcome to Todo List</h1>;
};

export default Welcome;

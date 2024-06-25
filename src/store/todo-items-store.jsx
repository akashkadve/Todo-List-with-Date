import { createContext } from "react";

export const TodoItems = createContext({
  getData: [],
  addNewItems: () => {},
  deleteItem: () => {},
});

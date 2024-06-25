import TodoInputs from "./components/TodoInputs";
import Welcome from "./components/welcomeMessage";
import TodoMap from "./components/todoMap";

import "./App.css";
import { useState } from "react";
import { TodoItems } from "./store/todo-items-store";

function App() {
  let [getData, setGetData] = useState([]);

  let addNewItems = (inputData, DateData) => {
    console.log(`data is  ${inputData} and ${DateData} `);
    setGetData((currValue) => [
      ...currValue,
      { name: inputData, dueDate: DateData },
    ]);
  };

  const deleteItem = (names) => {
    const deleteItems = getData.filter((item) => item.name !== names);
    setGetData(deleteItems);
  };

  return (
    <>
      <TodoItems.Provider
        value={{
          getData,
          addNewItems,
          deleteItem,
        }}
      >
        <center>
          <h1>Todo App</h1>
          <div className="container">
            <div className="row">
              <TodoInputs></TodoInputs>
              <Welcome></Welcome>
              <TodoMap></TodoMap>
            </div>
          </div>
        </center>
      </TodoItems.Provider>
    </>
  );
}

export default App;

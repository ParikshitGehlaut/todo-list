import Navbar from "./My Components/Navbar";
import Todos from "./My Components/Todos";
import Footer from "./My Components/Footer";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    // console.log("Hey!", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      description: "You need to go the market to bring vegetables",
    },
    {
      sno: 2,
      title: "Go to the gym",
      description: "You need to go the market to lose weight",
    },
    {
      sno: 3,
      title: "Go to the class",
      description: "You need to go the market to get good marks",
    },
  ]);
  return (
    <>
      <Navbar title="Todos List" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import List from "./components/List";
import ListItem from "./components/ListItem"
import "./App.css";

function App() {
  const todos = [
    { todo: "wake up", id: 1 },
    { todo: "breakfast", id: 2 },
    { todo: "study", id: 3 },
  ];
  
  
  return (
    <>
      <div className="App">
        <h1>hello world</h1>
      </div>
      <List todosList={todos}/>
    </>
  );
}

export default App;

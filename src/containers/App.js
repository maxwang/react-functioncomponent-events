import React from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";

function App() {
  const persons = [
    { id: "1", name: "John", age: 35 },
    { id: "2", name: "Lucy", age: 6 },
    { id: "3", name: "Max", age: 28 },
  ];

  return (
    <div className="App">
      <h1>Hi React App</h1>
      <Persons persons={persons} />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

function App() {
  const persons = [
    { id: "1", name: "John", age: 35 },
    { id: "2", name: "Lucy", age: 6 },
    { id: "3", name: "Max", age: 28 },
  ];

  return (
    <div className="App">
      <Cockpit />
      <Persons persons={persons} />
    </div>
  );
}

export default App;

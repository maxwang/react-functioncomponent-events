import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [persons, setPersons] = useState([
    { name: "Max", age: 28 },
    { name: "John", age: 35 },
    { name: "Lucy", age: 6 },
  ]);
  const switchNameHandler = (_newName, _event) => {
    let newArray = [...persons];
    newArray[0].name = _newName;
    setPersons(newArray);
  };
  return (
    <div className="App">
      <h1>Hi React App</h1>
      <button onClick={(e) => switchNameHandler("Max1", e)}>Switch Name</button>
      <Person name={persons[0].name} age={persons[0].age} />
      <Person
        click={switchNameHandler}
        name={persons[1].name}
        age={persons[1].age}
      />
      <Person name={persons[2].name} age={persons[2].age} />
    </div>
  );
}

export default App;

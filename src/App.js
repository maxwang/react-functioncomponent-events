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

  const changeNameHandler = (_event) => {
    let newArray = [...persons];
    newArray[0].name = _event.target.value;
    setPersons(newArray);
  };

  return (
    <div className="App">
      <h1>Hi React App</h1>
      <button onClick={(e) => switchNameHandler("Max1", e)}>Switch Name</button>
      {persons.map((person, i) => (
        <Person
          key={i}
          click={switchNameHandler}
          change={changeNameHandler}
          name={person.name}
          age={person.age}
        />
      ))}
    </div>
  );
}

export default App;

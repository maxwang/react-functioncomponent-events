import React, { useState } from "react";
import "./App.css";
import Person from "../components/Person/Person";

function App() {
  const [persons, setPersons] = useState([
    { id: "1", name: "John", age: 35 },
    { id: "2", name: "Lucy", age: 6 },
    { id: "3", name: "Max", age: 28 },
  ]);

  // const switchNameHandler = (_newName, _event) => {
  //   let newArray = [...persons];
  //   newArray[0].name = _newName;
  //   setPersons(newArray);
  // };

  const changeNameHandler = (_event, id) => {
    let newArray = [...persons];
    const personIndex = newArray.findIndex((p) => {
      return p.id === id;
    });

    if (personIndex > -1) {
      newArray[personIndex].name = _event.target.value;
    }
    setPersons(newArray);
  };

  return (
    <div className="App">
      <h1>Hi React App</h1>
      {/* <button onClick={(e) => switchNameHandler("Max1", e)}>Switch Name</button> */}
      {persons.map((person, i) => (
        <Person
          key={person.id}
          change={(event) => changeNameHandler(event, person.id)}
          name={person.name}
          age={person.age}
        />
      ))}
    </div>
  );
}

export default App;

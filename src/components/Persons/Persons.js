import React, { useState } from "react";
import Person from "./Person/Person";
function Persons(props) {
  const [persons, setPersons] = useState(props.persons);
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

  return persons.map((person, i) => (
    <Person
      key={person.id}
      change={(event) => changeNameHandler(event, person.id)}
      name={person.name}
      age={person.age}
    />
  ));
}

export default Persons;

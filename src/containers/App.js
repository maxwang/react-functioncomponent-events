import React from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";

function App() {
  const persons = [
    { id: "1", name: "David", age: 9 },
    { id: "2", name: "Lucy", age: 6 },
    { id: "3", name: "Max", age: 28 },
  ];

  return [<Cockpit key="c1" />, <Persons persons={persons} key="c2" />];
}

export default withClass(App, "App");

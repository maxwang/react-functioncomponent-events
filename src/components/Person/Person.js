import React from "react";

function Person(props) {
  return (
    <div>
      <h3>
        {props.name} {props.age} years old
      </h3>
      <input type="text" onChange={props.change} value={props.name} />
      <p>{props.children}</p>
    </div>
  );
}

export default Person;

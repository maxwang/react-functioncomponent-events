import React from "react";

function Person(props) {
  return (
    <div>
      <h3 onClick={(e) => props.click("Max2", e)}>
        {props.name} {props.age} years old
      </h3>
      <input type="text" onChange={props.change} value={props.name} />
      <p>{props.children}</p>
    </div>
  );
}

export default Person;

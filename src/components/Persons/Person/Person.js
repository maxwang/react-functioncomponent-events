import React from "react";
import PropTypes from "prop-types";

const Person = (props) => {
  return (
    <div>
      <h3>
        {props.name} {props.age} years old
      </h3>
      <input type="text" onChange={props.change} value={props.name} />
      <p>{props.children}</p>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Person;

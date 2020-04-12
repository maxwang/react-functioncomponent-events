import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Person = (props) => {
  const inputElementRef = useRef();

  useEffect(
    () => inputElementRef.current && inputElementRef.current.focus(),
    []
  );

  return (
    <div>
      <h3>
        {props.name} {props.age} years old
      </h3>
      <input
        type="text"
        ref={inputElementRef}
        onChange={props.change}
        value={props.name}
      />
      <p>{props.children}</p>
    </div>
  );
};

Person.propTypes = {
  change: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Person;

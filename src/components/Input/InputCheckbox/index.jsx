import React from "react";
import propTypes from "prop-types";

export default function InputCheckBox(props) {
  const { id, name, value, onChange, onClick } = props;

  return (
    <input
      id={id}
      type="checkbox"
      name={name}
      onClick={onClick}
      onChange={onChange}
      className="ml-4"
      value={value}
    />
  );
}

InputCheckBox.propTypes = {
  onClick: propTypes.func,
  onChange: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.number,
};

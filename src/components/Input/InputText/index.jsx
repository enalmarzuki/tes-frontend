import React from "react";

import propTypes from "prop-types";

export default function Input(props) {
  const { id, name, type, placeholder, onChange, onClick } = props;

  return (
    <div className="label-input w-full">
      {/* <label htmlFor={id} className="font-semibold text-lg mb-3">
        Input
      </label> */}

      <input
        id={id}
        name={name}
        type={type}
        onClick={onClick}
        onChange={onChange}
        className="w-full px-2 py-2 ring-1 ring-gray-200 focus:outline-none focus:ring focus:ring-blue-300 rounded-sm"
        placeholder={placeholder}
      />
    </div>
  );
}

Input.propTypes = {
  onClick: propTypes.func,
  onChange: propTypes.func,
  id: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.oneOf(["text", "number", "email"]),
};

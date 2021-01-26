import React from "react";

import propTypes from "prop-types";

export default function Button(props) {
  const { id, onClick, children } = props;
  return (
    <button
      className="text-center w-1/2  mx-1 bg-blue-500 py-2 rounded text-xl font-bold text-white"
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  id: propTypes.string,
  onClick: propTypes.func,
};

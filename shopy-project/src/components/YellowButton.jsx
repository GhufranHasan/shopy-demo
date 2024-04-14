import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const YellowButton = ({ text, borderRadius }) => {
  const buttonStyle = {
    borderRadius: borderRadius,
  };

  return (
    <button className="shopping-button" style={buttonStyle}>
      {text} <MdArrowOutward />
    </button>
  );
}

export default YellowButton;
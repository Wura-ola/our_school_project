import React from "react";

function Button(props) {
  return (
    <button
      className={`flex    border-[#DDDDDD] border-[1.5px]  rounded text-[#344054] text-sm py-[6px] ${props.className}`}
    >
      {props.img}
      {props.text}
    </button>
  );
}

export default Button;

import React from "react";

function Input(props) {
  return (
    <input
      className="w-[100%]  border-lightGray border-2 rounded  mb-4 pl-3 py-[5px] hover:border-[#D2E6FF]  outline-none"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;

import React from "react";

function Input(props) {
  return (
    <div>
      <label className="text-[#344054]"> {props.text}</label>
      <input
        className="w-[100%]  border-lightGray border-2 rounded-lg  mb-4 pl-3 py-[5px] hover:border-[#D2E6FF]  outline-none"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;

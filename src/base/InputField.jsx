import React from "react";

function InputField({ type, placeholder, key }) {
  return (
    <div className=" mb-2 h-20 w-fit flex flex-col items-end justify-evenly">
      <label className="text-left text-sm" htmlFor={placeholder}>
        {placeholder}
      </label>
      <input
        placeholder={placeholder}
        key={key}
        type={type}
        className="text-right px-3 w-60 h-10 border rounded-md"
      />
    </div>
  );
}

export default InputField;

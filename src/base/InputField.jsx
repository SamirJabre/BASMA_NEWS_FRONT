import React from "react";

function InputField({ type, placeholder, onchange, value }) {
  return (
    <div className="mb-2 h-20 w-fit flex flex-col items-end justify-evenly xl:w-full">
      <label className="text-left text-sm xl:text-lg" htmlFor={placeholder}>
        {placeholder}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className="text-right px-3 w-60 h-10 border rounded-md xl:w-full"
        autoComplete="on"
        onChange={onchange}
        value={value}
      />
    </div>
  );
}

export default InputField;

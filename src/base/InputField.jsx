import React from "react";
function InputField({ type, placeholder, onchange, value, language }) {
  return (
    <div className={`${language === 'ar' ? 'items-end' : 'items-start'} mb-2 h-20 w-fit flex flex-col justify-evenly xl:w-full`}>
      <label className="text-left text-sm xl:text-lg" htmlFor={placeholder}>
        {placeholder}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className={`${language === 'ar' ? 'text-right' : 'text-left'} px-3 w-60 h-10 border rounded-md xl:w-full`}
        autoComplete="on"
        onChange={onchange}
        value={value}
      />
    </div>
  );
}

export default InputField;

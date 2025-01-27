import React from "react";

function Navigation({placeholder, border}) {
  return (
    <li className={` h-full w-fit md:px-2 lg:px-5 xl:px-8 2xl:px-10 flex justify-center items-center content-center ${border ? 'border-l border-slate-600' : 'border-none border-opacity-5'}`}>
      <a href="#" className="font-bold text-white text-[10%] md:text-[9px] lg:text-xs xl:text-base 2xl:text-xl relative overflow-hidden group hover:transition-all hover:scale-110">
        {placeholder}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-current transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
      </a>
    </li>
  );
}

export default Navigation;

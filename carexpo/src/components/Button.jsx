import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="dark:text-white   text-black font-bold relative w-[100px] hover:w-[120px] flex items-center justify-center  transition-all duration-700"
    >
      <div className="opacity-100">{children}</div>
      <div className="absolute  -top-4 -bottom-4 opacity-30 -right-8 -left-8 hover:opacity-90 transition-all duration-700 hover:bg-gradient-radial rounded-full px-8 py-4 mix-blend-multiply" />
    </button>
  );
}

export default Button;

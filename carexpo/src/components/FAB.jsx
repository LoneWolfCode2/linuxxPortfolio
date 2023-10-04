import React from "react";

function FAB({ children, variant }) {
  if (variant === "extended") {
    return (
      <div className="fixed w-[120px] h-[100px] bottom-0 right-0 my-8 mx-6">
        <div className="flex gap-1 justify-center items-center absolute cursor-pointer text-center rounded-full text-2xl z-50 h-16 bg-[#444cf7] hover:bg-[#22267c] dark:hover:bg-[#6970f9] bottom-0 left-0 right-0 m-auto leading-[4rem] transition-all duration-700 p-2 hover:shadow-zinc-700 shadow-specialDark text-white">
          {children[0]}
          <div className="text-sm">{children[1]}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed  w-[100px] h-[100px] bottom-0 right-0 my-8 mx-6">
        <div className="flex justify-center items-center absolute cursor-pointer text-center rounded-full text-2xl z-50 w-16 h-16 bg-[#444cf7] hover:bg-[#444df78c] bottom-0 left-0 right-0 m-auto leading-[4rem] transition-all duration-700 hover:shadow-zinc-700 shadow-specialDark text-white">
          {children}
        </div>
      </div>
    );
  }
}

export default FAB;

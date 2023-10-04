import React from "react";

function ButtonGroup({ children }) {
  return (
    <div class="inline-flex shadow-sm" role="group">
      {children.map((child, index) => {
        return (
          <button
            key={index}
            type="button"
            class="px-4 py-2 text-sm font-medium first:rounded-l-lg last:rounded-r-lg text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-[#444cf7] focus:z-10 focus:ring-2 focus:ring-[#444cf7] focus:text-[#444cf7] dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-[#22267c] dark:focus:ring-[#22267c] dark:focus:text-white"
          >
            {child.props.children}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonGroup;

//#444cf7

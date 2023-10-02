import React from "react";
import Radio from "./Radio";

function RadioGroup({ options, name }) {
  console.log(name);

  return (
    <>
      <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {options.map((option) => {
          return (
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex items-center pl-3">
                <Radio id={option} name={name} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default RadioGroup;
// <div class="flex items-center mb-4">
//
// </div>

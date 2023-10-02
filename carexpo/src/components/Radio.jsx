import React from "react";

function Radio({ id, name }) {
  const random = Math.floor((Math.random() * 101).toString());
  return (
    <>
      <input
        id={`${id + random}-id`}
        type="radio"
        value=""
        name={name}
        class="w-4 h-4 text-[#3d44de] bg-gray-100 border-gray-300 focus:ring-[#444cf7] dark:focus:ring-[#3d44de] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for={`${id + random}-id`}
        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {id}
      </label>
    </>
  );
}

export default Radio;

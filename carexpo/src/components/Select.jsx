import React from "react";

function Select({ label, labelId, value, onChange, children }) {
  function handleChange(e) {
    onChange(e);
  }
  return (
    <>
      <select
        id={`${labelId}`}
        value={value}
        onChange={handleChange}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>{label}</option>
        {children.map((child) => {
          return <option>{child}</option>;
        })}
      </select>
    </>
  );
}

export default Select;

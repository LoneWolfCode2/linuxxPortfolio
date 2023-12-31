import React from "react";

function FormatLeftIcon({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill ? fill : "currentColor"}
        d="M13.93 11h-10a.75.75 0 1 1 0-1.5h10a.75.75 0 0 1 0 1.5Zm6.14-4h-16a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5Zm0 8h-16a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5Zm-6.14 4h-10a.75.75 0 1 1 0-1.5h10a.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
}

export default FormatLeftIcon;

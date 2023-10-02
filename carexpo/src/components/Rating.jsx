import React from "react";

function Rating({ value }) {
  return (
    <div className="flex gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stop-color="#3d44de" />
            <stop offset="50%" stop-color="white" />
          </linearGradient>
        </defs>
        <path
          fill={value < 1 ? "url(#grad)" : "#3d44de"}
          d="m12.001.63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.26 9.161l8.839-.18L12 .63Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stop-color="#3d44de" />
            <stop offset="50%" stop-color="white" />
          </linearGradient>
        </defs>
        <path
          fill={2 < value > 1.5 ? "white" : "url(#grad)"}
          d="m12.001.63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.26 9.161l8.839-.18L12 .63Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stop-color="#3d44de" />
            <stop offset="50%" stop-color="white" />
          </linearGradient>
        </defs>
        <path
          fill={value < 2.5 ? "white" : "url(#grad)"}
          d="m12.001.63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.26 9.161l8.839-.18L12 .63Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stop-color="#3d44de" />
            <stop offset="50%" stop-color="white" />
          </linearGradient>
        </defs>
        <path
          fill={value < 4 ? "white" : "#3d44de"}
          d="m12.001.63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.26 9.161l8.839-.18L12 .63Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stop-color="#3d44de" />
            <stop offset="50%" stop-color="white" />
          </linearGradient>
        </defs>
        <path
          fill={value < 5 ? "white" : "#3d44de"}
          d="m12.001.63l2.903 8.35l8.839.181l-7.045 5.341l2.56 8.462L12 17.914l-7.256 5.05l2.56-8.462L.26 9.161l8.839-.18L12 .63Z"
        />
      </svg>
    </div>
  );
}

export default Rating;
// url(#grad)

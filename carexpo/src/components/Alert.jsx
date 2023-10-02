import React from "react";

function Alert({ type, title, message }) {
  switch (type) {
    case (type = "info"):
      return (
        <div
          className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 256 256"
          >
            <g fill="currentColor">
              <path
                d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96Z"
                opacity=".2"
              />
              <path d="M144 176a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8Zm88-48A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Zm-92-32a12 12 0 1 0-12-12a12 12 0 0 0 12 12Z" />
            </g>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">{title}</span> {message}
          </div>
        </div>
      );
    case (type = "danger"):
      return (
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 inline w-4 h-4 mr-3"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.1 5L5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1zm7.14 9.83l-1.41 1.41L12 13.41l-2.83 2.83l-1.41-1.41L10.59 12L7.76 9.17l1.41-1.41L12 10.59l2.83-2.83l1.41 1.41L13.41 12l2.83 2.83z"
              opacity=".3"
            />
            <path
              fill="currentColor"
              d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8zm-4.17-7.14L12 10.59L9.17 7.76L7.76 9.17L10.59 12l-2.83 2.83l1.41 1.41L12 13.41l2.83 2.83l1.41-1.41L13.41 12l2.83-2.83l-1.41-1.41z"
            />
          </svg>

          <span className="sr-only">Danger</span>
          <div>
            <span className="font-medium">{title}!</span> {message}
          </div>
        </div>
      );
    case (type = "success"):
      return (
        <div
          className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 inline w-4 h-4 mr-3"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
            />
          </svg>
          <span className="sr-only">Success</span>
          <div>
            <span className="font-medium">{title}!</span> {message}
          </div>
        </div>
      );
    case (type = "warning"):
      return (
        <div
          className="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <path
                d="M12 3c-2.31 0-3.77 2.587-6.688 7.761l-.364.645c-2.425 4.3-3.638 6.45-2.542 8.022S6.214 21 11.636 21h.728c5.422 0 8.134 0 9.23-1.572s-.117-3.722-2.542-8.022l-.364-.645C15.77 5.587 14.311 3 12 3Z"
                opacity=".5"
              />
              <path d="M12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" />
            </g>
          </svg>
          <span className="sr-only">Warning</span>
          <div>
            <span className="font-medium">{title}!</span> {message}
          </div>
        </div>
      );
    case (type = "dark"):
      return (
        <div
          className="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 inline w-4 h-4 mr-3"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Z"
            />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">{title}!</span> {message}
          </div>
        </div>
      );
    default:
      return <div>Alert</div>;
  }
}

export default Alert;

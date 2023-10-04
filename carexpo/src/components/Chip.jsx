import React from "react";

function Chip({
  color,
  label,
  variant,
  onClick,
  onDelete,
  href,
  component,
  deleteIcon,
  avatar,
}) {
  const handleClick = (e) => {
    alert("click handle");
    //this is to handle any click function passed down
  };
  if (component === "a") {
    return (
      <a
        href={href}
        style={{ backgroundColor: color }}
        onClick={onClick ? (e) => handleClick(e) : null}
        className={`px-1 py-1 w-fit rounded-full flex justify-center items-center gap-2 whitespace-nowrap ${
          onClick ? "cursor-pointer" : null
        }  dark:text-white ${
          variant === "outlined"
            ? "border border-solid border-slate-600"
            : "bg-slate-600 "
        }`}
      >
        {avatar && <div className="h-5 w-5">{avatar}</div>}
        {label}
        {onDelete && (
          <div
            className="text-xs h-5 w-5 leading-4 rounded-full grid place-items-center bg-slate-400 cursor-pointer"
            onClick={onDelete}
          >
            {deleteIcon ? deleteIcon : "X"}
          </div>
        )}
      </a>
    );
  }
  return (
    <div
      style={{ backgroundColor: color }}
      onClick={onClick ? (e) => handleClick(e) : null}
      className={`px-1 py-1 w-fit rounded-full flex justify-center items-center gap-2 whitespace-nowrap ${
        onClick ? "cursor-pointer" : null
      }  dark:text-white ${
        variant === "outlined"
          ? "border border-solid border-slate-600"
          : "bg-slate-600 "
      }`}
    >
      {avatar && <div className="h-5 w-5">{avatar}</div>}
      {label}
      {onDelete && (
        <div
          className="text-xs h-5 w-5 rounded-full grid place-items-center bg-slate-400 cursor-pointer"
          onClick={onDelete}
        >
          {deleteIcon ? deleteIcon : "X"}
        </div>
      )}
    </div>
  );
}

export default Chip;

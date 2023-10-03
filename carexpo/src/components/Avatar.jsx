import React from "react";
import "./Avatar.module.css";
function Avatar({ src, alt, children, sx, variant }) {
  if (variant === "square") {
    return (
      <div
        style={{ ...sx, borderRadius: "0.5rem", overflow: "hidden" }}
        class="uppercase w-11 h-11 text-slate-900 grid place-items-center bg-[#444cf7]"
        alt={alt}
      >
        {" "}
        {children} {!children && <img src={src} alt="" />}
      </div>
    );
  }
  return (
    <div
      style={{ ...sx, borderRadius: "999px", overflow: "hidden" }}
      class="w-full h-full max-h-[2.75rem] max-w-[2.75rem] text-slate-900 grid place-items-center bg-[#444cf7]"
      alt={alt}
    >
      {" "}
      {children} {!children && <img src={src} alt="" />}
    </div>
  );
}

export default Avatar;

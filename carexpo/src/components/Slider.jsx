import React from "react";

function Slider({ value, onChange }) {
  function handleChange(e) {
    onChange(e);
  }
  return (
    <>
      <input
        className="slider shadow-lg shadow-white"
        type="range"
        value={value}
        name=""
        id=""
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}

export default Slider;

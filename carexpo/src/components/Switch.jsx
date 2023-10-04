import React from "react";

function Switch() {
  return (
    <div className="switch">
      <input type="checkbox" name="check" id="switchID" className="hidden" />
      <label htmlFor="switchID"></label>
    </div>
  );
}

export default Switch;

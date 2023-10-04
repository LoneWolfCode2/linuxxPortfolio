import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
function Progress({ variant, value, label, color }) {
  const [progress, setProgress] = useState();
  function getTintedColor(color, v) {
    if (color.length > 6) {
      color = color.substring(1, color.length);
    }
    var rgb = parseInt(color, 16);
    var r = Math.abs(((rgb >> 16) & 0xff) + v);
    if (r > 255) r = r - (r - 255);
    var g = Math.abs(((rgb >> 8) & 0xff) + v);
    if (g > 255) g = g - (g - 255);
    var b = Math.abs((rgb & 0xff) + v);
    if (b > 255) b = b - (b - 255);
    r = Number(r < 0 || isNaN(r)) ? 0 : (r > 255 ? 255 : r).toString(16);
    if (r.length == 1) r = "0" + r;
    g = Number(g < 0 || isNaN(g)) ? 0 : (g > 255 ? 255 : g).toString(16);
    if (g.length == 1) g = "0" + g;
    b = Number(b < 0 || isNaN(b)) ? 0 : (b > 255 ? 255 : b).toString(16);
    if (b.length == 1) b = "0" + b;
    return "#" + r + g + b;
  }
  useLayoutEffect(() => {
    let arcLength = 2 * Math.PI * 40;
    let arcOffset = arcLength * ((100 - value) / 100);
    setProgress(arcOffset);
  }, [value]);
  return (
    <div className="text-white relative w-fit">
      <motion.svg className="svg-indicator ">
        <circle
          className="svg-indicator-track"
          style={{ stroke: color ? getTintedColor(color.slice(1), 50) : null }}
        />
        <motion.circle
          style={{ stroke: color }}
          initial={{ strokeDashoffset: progress }}
          animate={{ strokeDashoffset: progress }}
          transition={{ ease: "easeOut" }}
          className="svg-indicator-indication"
        />
      </motion.svg>
      {label && (
        <span className="text-white flex items-center justify-center absolute z-50 top-0 right-0 bottom-0 left-0">
          {value}%
        </span>
      )}
    </div>
  );
}
// stroke-dashoffset: 106.4px;
export default Progress;

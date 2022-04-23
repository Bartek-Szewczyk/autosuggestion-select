import React from "react";

function TickIcon({ fill = "#fff" }) {
  return (
    <svg
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 24L20 34L40 14"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TickIcon;

import React, { useState } from "react";

function Cell({ playerTurn, index, onClick }) {
  return (
    <div
      data-cell-index={index}
      className="w-[25vw] h-[25vw] outline outline-blue-300 outline-2 bg-white"
      {...{ onClick }}
    >
      {/* wrap in span for styling like hover */}
      <span data-cell-index={index}>{playerTurn}</span>
    </div>
  );
}

export default Cell;

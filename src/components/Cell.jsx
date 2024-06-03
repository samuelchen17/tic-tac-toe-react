function Cell({ gameStateArrayValue, index, onClick }) {
  return (
    <div
      data-cell-index={index}
      className="flex justify-center items-center w-[25vw] h-[25vw] outline outline-blue-300 outline-2 bg-white"
      {...{ onClick }}
    >
      <span data-cell-index={index} className="text-[24vw]">
        {gameStateArrayValue}
      </span>
    </div>
  );
}

export default Cell;

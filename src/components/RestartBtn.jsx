import React from "react";

function RestartBtn({ newGame }) {
  const handleRestart = () => {
    newGame();
  };
  return (
    <button
      onClick={handleRestart}
      className="mt-4 px-6 py-2 bg-blue-500 text-white font-2xl rounded-md hover:bg-blue-600 hover:cursor"
    >
      Restart
    </button>
  );
}

export default RestartBtn;

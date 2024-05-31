import { useState } from "react";
import Cell from "./Cell";

function GameBoard({ gameState, playerTurn, setGameState }) {
  const handleOnClick = (event) => {
    const cellIndex = Number(event.target.getAttribute("data-cell-index"));

    // if cell already has a value
    if (gameState[cellIndex] != "") {
      return;
    }

    // copy the array
    const newGameState = [...gameState];
    newGameState[cellIndex] = playerTurn;
    setGameState(newGameState);

    console.log(cellIndex);
    console.log(gameState);
  };

  return (
    <div className="grid grid-cols-3 gap-[2vw]">
      {gameState.map((cell, index) => {
        return (
          <Cell
            key={index}
            {...{ index, playerTurn }}
            onClick={handleOnClick}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;

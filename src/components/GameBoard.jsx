import { useEffect, useState } from "react";
import Cell from "./Cell";

const WIN_CON = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function GameBoard({ gameState, setGameState, playerTurn, setPlayerTurn }) {
  const handleOnClick = (event) => {
    const cellIndex = Number(event.target.getAttribute("data-cell-index"));

    // if cell already has a value
    if (gameState[cellIndex] != "") {
      return;
    }

    // update gameState array in an immutable way
    const newGameState = [...gameState];
    // add player symbol into array
    newGameState[cellIndex] = playerTurn;
    setGameState(newGameState);

    // the issue here is that update gameState is scheduled not resolved here, so check win here doesn't work
    // check win
  };

  useEffect(() => {
    console.log(gameState);
    checkWin();
    changeTurns();
  }, [gameState]);

  const changeTurns = () => {
    setPlayerTurn(playerTurn === "X" ? "O" : "X");
  };

  // go through win con array
  const checkWin = () => {
    WIN_CON.forEach((combination) => {
      const [a, b, c] = combination;
      if (
        gameState[a] === playerTurn &&
        gameState[b] === playerTurn &&
        gameState[c] === playerTurn
      ) {
        console.log(`${playerTurn} won`);
      }
    });
  };

  return (
    <div className="grid grid-cols-3 gap-[2vw]">
      {/* for each item, therefore, player in this case is what get's inserted in gameState */}
      {gameState.map((gameStateArrayValue, index) => {
        return (
          <Cell
            key={index}
            {...{ index, gameStateArrayValue }}
            onClick={handleOnClick}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;

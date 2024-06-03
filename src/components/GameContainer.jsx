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

function GameContainer({
  gameBoard,
  setGameBoard,
  playerTurn,
  setPlayerTurn,
  newGame,
  INITIAL_GAME_BOARD,
}) {
  const handleOnClick = (event) => {
    const cellIndex = Number(event.target.getAttribute("data-cell-index"));

    // if cell already has a value
    if (gameBoard[cellIndex] != "") {
      return;
    }

    updateGameBoard(cellIndex, gameBoard);
    // the issue here is that update gameBoard is scheduled not resolved here, so check win here doesn't work
  };

  const updateGameBoard = (cellIndex, gameBoard) => {
    // update gameBoard array in an immutable way
    const newGameState = [...gameBoard];
    // add player symbol into array
    newGameState[cellIndex] = playerTurn;
    setGameBoard(newGameState);
  };

  useEffect(() => {
    console.log(gameBoard);
    if (gameBoard === INITIAL_GAME_BOARD) {
      console.log("no player switch");
    } else {
      checkWin();
    }
  }, [gameBoard]);

  const changeTurns = () => {
    setPlayerTurn(playerTurn === "X" ? "O" : "X");
    console.log(`${playerTurn} player switch`);
  };

  // go through win con array
  const checkWin = () => {
    WIN_CON.forEach((combination) => {
      const [a, b, c] = combination;
      if (
        gameBoard[a] === playerTurn &&
        gameBoard[b] === playerTurn &&
        gameBoard[c] === playerTurn
      ) {
        console.log(`${playerTurn} won`);
        newGame();
      } else {
        changeTurns();
      }
    });
  };

  return (
    <div className="grid grid-cols-3 gap-[2vw]">
      {/* for each item, therefore, player in this case is what get's inserted in gameBoard */}
      {gameBoard.map((gameStateArrayValue, index) => {
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

export default GameContainer;

// gameStatus = true
// after checkWin or Draw, gameStatus = false
// press restart for game status to be set to true again

// when gameStatus = true, start the game
// const startGame = () => {

// }

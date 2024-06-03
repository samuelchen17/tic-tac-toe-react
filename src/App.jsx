import { useState } from "react";
import GameContainer from "./components/GameContainer";
import RestartBtn from "./components/RestartBtn";
import TurnDisplay from "./components/TurnDisplay";

const INITIAL_GAME_BOARD = ["", "", "", "", "", "", "", "", ""];

function App() {
  // const [gameState, setGameState] = true;
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);
  const [playerTurn, setPlayerTurn] = useState("X");
  // const [gameStatus, setGameStatus] = useState(true);

  const newGame = () => {
    setGameBoard(INITIAL_GAME_BOARD);
    setPlayerTurn("X");
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-950 to-blue-700 min-h-svh w-screen">
      <h1 className="text-white text-6xl my-10">Tic Tac Toe</h1>
      <GameContainer
        {...{
          gameBoard,
          setGameBoard,
          playerTurn,
          setPlayerTurn,
          newGame,
          INITIAL_GAME_BOARD,
        }}
      />
      <TurnDisplay {...{ playerTurn }} />
      <div>win message</div>
      <RestartBtn />
    </div>
  );
}

export default App;

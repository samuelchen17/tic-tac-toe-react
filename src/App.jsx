import { useState } from "react";
import GameContainer from "./components/GameContainer";

const INITIAL_GAME_BOARD = ["", "", "", "", "", "", "", "", ""];

function App() {
  // const [gameState, setGameState] = true;
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);
  const [playerTurn, setPlayerTurn] = useState("O");

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-950 to-blue-700 min-h-svh w-screen">
      <h1 className="text-white text-6xl my-10">Tic Tac Toe</h1>
      <GameContainer
        {...{ gameBoard, setGameBoard, playerTurn, setPlayerTurn }}
      />
      <div>whos turn</div>
      <div>win message</div>
      <div>restart</div>
    </div>
  );
}

export default App;

import { useState } from "react";
import GameBoard from "./components/GameBoard";

const INITIAL_GAME_STATE = ["x", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [playerTurn, setPlayerTurn] = useState("X");

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-950 to-blue-700 min-h-svh w-screen">
      <h1 className="text-white text-6xl my-10">Tic Tac Toe</h1>
      <GameBoard
        gameState={gameState}
        setGameState={setGameState}
        playerTurn={playerTurn}
      />
      <div>whos turn</div>
      <div>win message</div>
      <div>restart</div>
    </div>
  );
}

export default App;

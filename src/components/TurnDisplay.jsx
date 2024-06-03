import React from "react";

function TurnDisplay({ playerTurn, winner, draw }) {
  if (winner === true) {
    return <div className="text-6xl text-white my-5">{playerTurn}'s Won</div>;
  } else if (draw === true) {
    return <div className="text-6xl text-white my-5">Draw!!</div>;
  } else {
    return <div className="text-6xl text-white my-5">{playerTurn}'s Turn</div>;
  }
}

export default TurnDisplay;

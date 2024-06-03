import React from "react";

function TurnDisplay({ playerTurn, winner }) {
  if (winner === true) {
    return <div className="text-6xl text-white my-5">{playerTurn}'s Won</div>;
  } else {
    return <div className="text-6xl text-white my-5">{playerTurn}'s Turn</div>;
  }
}

export default TurnDisplay;

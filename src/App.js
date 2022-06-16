// import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import { useSelector } from "react-redux";

function App() {
  const winner = useSelector((state) => state.game.winner);
  return (
    <div className="App">
      <GameBoard />
      {winner !== "" && <p>{winner}</p>}
    </div>
  );
}

export default App;

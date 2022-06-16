// ** Redux Imports
import { useSelector } from "react-redux";

// ** User Components
import GameBoard from "./components/GameBoard";

// ** Style Imports
import "./App.css";

// ** Main App Component
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

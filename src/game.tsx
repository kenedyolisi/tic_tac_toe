import { useState } from "react";
import Board from "./board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, SetHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    SetHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

import { useState } from "react";
import Board from "./board";

export default function Game() {
  const [history, SetHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: string[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    SetHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((_squares: string[], move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button
          className="p-2 border rounded active:scale-[98%]"
          type="button"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="py-2">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <ul className="flex flex-col gap-3">{moves}</ul>
    </div>
  );
}

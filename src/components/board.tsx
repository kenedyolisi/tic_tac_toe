import Square from "./square";

interface BoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (squares: string[]) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const handleClick = (i: number) => {
    // Check if square is already filled and do nothing
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const squaresButtons: JSX.Element[] = [];

  for (let i = 0; i < 9; i++) {
    squaresButtons.push(
      <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
    );
  }

  return (
    <div className="mb-2">
      <div className="">{status}</div>

      <div className="grid grid-cols-3 grid-rows-3 w-40 h-40 border rounded-md my-2">
        {squaresButtons.map((square) => square)}
      </div>
    </div>
  );
}

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0, max = lines.length; i < max; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

<script lang="ts">
  import Square from "./square.svelte";

  interface Props {
    xIsNext: boolean;
    squares: string[];
    onPlay: (squares: string[]) => void;
  }

  let { xIsNext, squares, onPlay }: Props = $props();

  const winner = calculateWinner(squares);

  let status = $state();

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  function handleSquareClick(i: number) {
    // Check if square is already filled and do nothing
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = [...squares];

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  function calculateWinner(squares: string[]) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
</script>

<div class="mb-2">
  <div>{status}</div>

  <div class="grid grid-cols-3 grid-rows-3 w-40 h-40 border rounded-md my-2">
    {#each Array(9) as _, index}
      <Square
        value={squares[index]}
        handleClick={() => handleSquareClick(index)}
      />
    {/each}
  </div>
</div>

<script lang="ts">
  import Board from "./board.svelte";
  let history = $state([Array(9).fill(null)]);
  let currentMove = $state(0);
  let xIsNext = $derived(currentMove % 2 === 0);
  let currentSquares = $derived(history[currentMove]);
  
  function handlePlay(nextSquares: string[]) {
    let nextHistory = $derived([
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ]);
    history = nextHistory;
    currentMove = nextHistory.length - 1;
  }

  function jumpTo(nextMove: number) {
    currentMove = nextMove;
  }
  const moves = $derived.by(() => {
    history.map((_squares: string[], move) => {
      let description = $state();
      if (move > 0) {
        description = `Go to move #${move}`;
      } else {
        description = `Go to game start`;
      }

      return (
        <li>
          <button
            class="p-2 border rounded active:scale-[98%]"
            type="button"
            onclick={() => jumpTo(move)}
          >
            {description}
          </button>
        </li>
      );
    });
  });
</script>

<div class="py-2">
  <Board {xIsNext} squares={currentSquares} onPlay={handlePlay} />
  <ul class="flex flex-col gap-3">{moves}</ul>
</div>

export default function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="btn btn-lg btn-outline-secondary"
    >
      {value}
    </button>
  );
}

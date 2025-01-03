export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="border hover:bg-gray-100"
      type="button"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

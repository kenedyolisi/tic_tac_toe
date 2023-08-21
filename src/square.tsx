const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="btn btn-lg btn-outline-secondary"
    >
      {value}
    </button>
  );
};

export default Square;

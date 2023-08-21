import { useState } from "react";
import Square from "./square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default Board;

import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue("X");
  };

  return (
    <button className="btn btn-lg btn-outline-secondary" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;

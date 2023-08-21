import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue("X");
  };

  return <button onClick={handleClick}>{value}</button>;
};

export default Square;

import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    //...
  };

  return <button>{value}</button>;
};

export default Square;

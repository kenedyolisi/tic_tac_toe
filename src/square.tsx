interface ISquareProp {
  value: string;
}

const Square = ({ value }: ISquareProp) => {
  return <button>{value}</button>;
};

export default Square;

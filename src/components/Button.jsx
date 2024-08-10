const Button = ({ bill, tip1, tip2 }) => {
  function handleClick() {
    bill(0);
    tip1(1);
    tip2(2);
  }
  return <button onClick={handleClick}>Reset</button>;
};

export default Button;

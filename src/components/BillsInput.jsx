const BillsInput = ({ value, onUpdate }) => {
  return (
    <div className="bills">
      <p>How much was the Bill?</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onUpdate(Number(e.target.value))}
      />
    </div>
  );
};

export default BillsInput;

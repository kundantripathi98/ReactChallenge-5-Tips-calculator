import { useState } from "react";

const Service1 = ({ myTip, onUpdate }) => {
  return (
    <div className="bills">
      <p>How did you like the service?</p>
      <select
        name=""
        id=""
        value={myTip}
        onChange={(e) => onUpdate(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

export default Service1;

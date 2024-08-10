import { useState } from "react";

const Payment = ({ amount, myTip, friendTip }) => {
  const avgTip = (myTip + friendTip) / 2;
  const perc = (amount * avgTip) / 100;
  const finalAmt = amount + perc;
  return (
    <div>
      {amount > 0 && (
        <div className="bills">
          <h1>
            You will pay &#8377;{finalAmt} (&#8377;{amount} + &#8377;{perc} tip)
          </h1>
        </div>
      )}
    </div>
  );
};

export default Payment;

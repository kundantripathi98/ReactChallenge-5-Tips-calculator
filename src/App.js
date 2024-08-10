import { useState } from "react";
import BillsInput from "./components/BillsInput";
import Button from "./components/Button";
import Service1 from "./components/Service1";
import Service2 from "./components/Service2";
import Payment from "./Payment";
import "./styles.css";

export default function App() {
  const [billVal, setBillVal] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  return (
    <div className="App">
      <BillsInput value={billVal} onUpdate={setBillVal} />
      <Service1 myTip={myTip} onUpdate={setMyTip} />
      <Service2 friendTip={friendTip} onUpdate={setFriendTip} />
      <Payment amount={billVal} myTip={myTip} friendTip={friendTip} />
      <Button bill={setBillVal} tip1={setMyTip} tip2={setFriendTip} />
    </div>
  );
}

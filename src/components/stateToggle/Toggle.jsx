import { useState } from "react";
import "./toggle.css";

const Toggle = () => {
  const [on, setOn] = useState(false);
  function handleClick() {
    setOn((on) => !on);
  }
  return (
    <div className="wrapper">
      <div className={`Toggle ${on ? "active" : ""}`} onClick={handleClick}>
        <div className={`circle ${on ? "spinner" : ""}`}></div>
      </div>
    </div>
  );
};

export default Toggle;

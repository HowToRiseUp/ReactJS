import { useEffect, useRef, useState } from "react";

const Time = () => {
  const timer = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  const handlStart = () => {
    timer.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 100);
  };
  const handlStop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };
  return (
    <div>
      <div className="m-5">Time: {count}s</div>
      <div className="text-green-400 mx-5" onClick={handlStart}>
        Start
      </div>
      <div className="text-green-400 m-5" onClick={handlStop}>
        Stop
      </div>
    </div>
  );
};

export default Time;

import { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [info, setInfor] = useState({
    fn: "cc",
    ln: "cc",
  });
  useEffect(() => {
    console.log(count);
    const timer = setInterval(() => {
      console.log(info.fn);
    }, 2000);
    return () => clearInterval(timer);
  }, [count, info.fn]);

  return (
    <div className="flex justify-center items-center gap-4 p-7">
      <div className="text-2xl font-medium">{count}</div>
      <button
        className="bg-green-500 rounded-lg text-white px-8 py-2 cursor-pointer"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        <span className="pointer-events-none visible">Increment</span>
      </button>

      <input
        value={info.fn}
        onChange={(e) => {
          setInfor((info) => ({
            ...info,
            fn: e.target.value,
          }));
        }}
      />
    </div>
  );
};

export default Count;

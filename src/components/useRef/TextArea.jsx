import { useLayoutEffect, useRef, useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("cc");
  const areaRef = useRef(null);
  const [areaHeight, setAreaHeight] = useState("auto");
  const handleChange = (e) => {
    setText(e.target.value);
    setAreaHeight("auto");
  };
  useLayoutEffect(() => {
    setAreaHeight(`${areaRef.current.scrollHeight}px`);
  }, [text]);
  return (
    <div className={`m-5`}>
      <textarea
        ref={areaRef}
        className={`border p-5 border-gray-400 w-[400px] resize-none rounded-md overflow-hidden transition-all
        `}
        style={{
          height: areaHeight,
        }}
        value={text}
        onChange={handleChange}
        placeholder="Con mẹ mày điền đi"
      ></textarea>
    </div>
  );
};

export default TextArea;

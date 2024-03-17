import { useEffect, useRef } from "react";

const InputAutoFocus = () => {
  const divRef = useRef();
  useEffect(() => {
    divRef.current.focus();
  }, []);
  return (
    <div>
      <input
        ref={divRef}
        className=" mx-5 border rounded-md focus:border-blue-500"
      />
    </div>
  );
};

export default InputAutoFocus;

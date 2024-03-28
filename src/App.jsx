import { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./globalStyles"; // Assuming this is where you export your GlobalStyle component
import ModalAdvanced from "./components/modal/ModalAdvand";
const App = () => {

  const [show, setShow] = useState(false);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <button className="m-5 p-5 rounded-md bg-red-300" onClick={() => {
        setShow(true)
      }}>ccccccc</button>
      <ModalAdvanced visible={show} onClose={() => {
        setShow(false)
      }} heading={'Hello I m BAck'}> <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-lg">
          Sign in
        </button></ModalAdvanced>
    </>
  );
};

export default App;

import "./App.css";
import SibarMenu from "./components/useRef/SibarMenu";
import { GlobalStyle } from "./globalStyles"; // Assuming this is where you export your GlobalStyle component
import useClickOutSide from "./hooks/useClickOutSide";
const App = () => {
  const { show, nodeRef, setShow, bodyRef } = useClickOutSide();
  console.log(show);
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <div onClick={() => {
        setShow(show => !show)
      }} className="bg-purple-500 rounded-md px-4 py-2 text-center text-white w-[70px] mt-4 mx-[400px]" ref={nodeRef}>click</div>
      <SibarMenu show={show} ref={bodyRef}></SibarMenu>
    </div>
  );
};

export default App;

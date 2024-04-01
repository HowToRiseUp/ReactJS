import "./App.css";
import Accordion from "./components/addvanced-react/accordion/Accordion";
import { GlobalStyle } from "./globalStyles"; // Assuming this is where you export your GlobalStyle component
const App = () => {

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div className="h-screen flex flex-col justify-center items-center">

        <Accordion></Accordion>
        <Accordion></Accordion>
        <Accordion></Accordion>
        <Accordion></Accordion>
      </div>
    </>
  );
};

export default App;

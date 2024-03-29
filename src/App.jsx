import "./App.css";
import Context from "./components/context/Context";
import { GlobalStyle } from "./globalStyles"; // Assuming this is where you export your GlobalStyle component
const App = () => {

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Context></Context>
    </>
  );
};

export default App;

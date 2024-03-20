import "./App.css";
import InputSearchMovie from "./components/form/InputSearchMovie";
import { GlobalStyle } from "./globalStyles"; // Assuming this is where you export your GlobalStyle component
const App = () => {

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <InputSearchMovie></InputSearchMovie>
    </div>
  );
};

export default App;

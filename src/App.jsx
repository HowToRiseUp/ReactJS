import "./App.css";
import UserContext from "./context/UserContext";
import { GlobalStyle } from "./globalStyles"; // Assuming this is where you export your GlobalStyle component
const App = () => {

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <UserContext></UserContext>
    </>
  );
};

export default App;

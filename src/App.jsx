import "./App.css";
import { GlobalStyle } from "./globalStyles"; // Assuming this is where you export your GlobalStyle component
import SignUpFormik from "./components/form/SignUpFormik";
const App = () => {

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <SignUpFormik></SignUpFormik>
    </div>
  );
};

export default App;

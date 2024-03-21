import "./App.css";
import { GlobalStyle } from "./globalStyles"; // Assuming this is where you export your GlobalStyle component
import FormikLearn from "./components/form/FormikLearn";
const App = () => {

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <FormikLearn></FormikLearn>
    </div>
  );
};

export default App;

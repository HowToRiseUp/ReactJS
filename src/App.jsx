import "./App.css";
import Products from "./components/layout/Products";
import { GalleryProvider } from "./context/gallery-context";
import { GlobalStyle } from "./globalStyles"; // Assuming this is where you export your GlobalStyle component
const App = () => {

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <GalleryProvider>
        <Products></Products>
      </GalleryProvider>
    </>
  );
};

export default App;

import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagina2 from "./Components/Pagina2";
import Pagina3 from "./Components/Paginn3";
import MenuMobile from "./Components/MenuMobile";
import MenuDesktop from "./Components/MenuDesktop";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuMobile />
        <MenuDesktop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina3" element={<Pagina3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import HeaderDesktop from "./Components/HeaderDesktop";
import Header from "./Components/HeaderMobile";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Header />
      <HeaderDesktop />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;

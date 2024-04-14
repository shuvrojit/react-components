import "./App.css";
import Nav from "./components/header/index";
import Subscription from "./components/subscription/Subscription";

function App() {
  return (
    <>
      <Nav.HamburgerMenu direction="left" />
      <Nav.HamburgerMenu direction="right" position="bottom-right" />
      <Nav.HamburgerMenu direction="right" position="top-right" />
      <Nav.HamburgerMenu direction="left" position="bottom-left" />
      <Subscription />
    </>
  );
}

export default App;

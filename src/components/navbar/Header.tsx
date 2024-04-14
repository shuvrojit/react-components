import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "./Header.css";

type HeaderProps = {};
const Header = () => {
  const [toggle, setToggle] = useState(false);

  function openNav() {}

  function closeNav() {}
  function toggleMenu() {
    console.log("toggle");
    setToggle(!toggle);
  }
  return (
    <>
      <div className="hamburger" onClick={toggleMenu}>
        <HamburgerMenu direction="right" position="top-left" />
      </div>
      <div
        className={"overlay overlay-left" + (toggle ? " overlay-content " : "")}
      >
        <a href="#" className="active">
          Home
        </a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
};

export default Header;

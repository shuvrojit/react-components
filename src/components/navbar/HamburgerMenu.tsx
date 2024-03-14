import { useState } from "react";
import "./HamburgerMenu.css";

type HamburgerMenuProps = {
  direction: string;
};

const HamburgerMenu = ({ direction }: HamburgerMenuProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  return (
    <>
      <div
        className={"hamburger-menu " + (toggle ? direction : "")}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default HamburgerMenu;

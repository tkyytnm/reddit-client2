import { useState } from "react";

export function Hamburger() {
  const [hamOn, setHamOn] = useState(false);
  const handleButton = () => {
    setHamOn(!hamOn);
  };

  return (
    <nav>
      <div
        id="hamburgerButton"
        onClick={() => handleButton()}
        className={hamOn ? "on" : ""}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="hamburgerMenu" className={hamOn ? "on" : ""}>
        <div>DOGS</div>
        <div>AWWWW</div>
        <div>Something</div>
      </div>
    </nav>
  );
}

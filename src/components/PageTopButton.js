import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function PageTopButton() {
  const [isShow, setIsShow] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  const topFunction = () => {

  }

  window.addEventListener("scroll", scrollFunction);

  function onClickHandler() {
    console.log("Clicked!");
  }

  return (
    <FontAwesomeIcon
      icon={faChevronCircleUp}
      id="pageTop"
      className={isShow ? "show" : ""}
      onClick={() => onClickHandler()}
    />
  );
}

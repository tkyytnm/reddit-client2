import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import $ from "jquery";

export function PageTopButton() {
  const [isShow, setIsShow] = useState(false);

  const scrollFunction = () => {
    setIsShow(
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    );
  };

  const topFunction = () => {
    $("html, body").animate({ scrollTop: 0 }, 500);
  };

  window.addEventListener("scroll", scrollFunction);

  return (
    <FontAwesomeIcon
      icon={faChevronCircleUp}
      id="pageTop"
      className={isShow ? "show" : ""}
      onClick={topFunction}
    />
  );
}

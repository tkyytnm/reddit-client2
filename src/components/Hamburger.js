import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { switchCurrentPosts } from "../features/posts/postsSlice";

export function Hamburger() {
  const dispatch = useDispatch();
  const [hamOn, setHamOn] = useState(false);
  const handleButton = () => {
    setHamOn(!hamOn);
  };

  const switchCurrentPostsHandler = (postsPath) => {
    dispatch(switchCurrentPosts(postsPath));
    handleButton();
  };

  return (
    <nav>
      <div
        id="hamburgerButton"
        onClick={handleButton}
        className={hamOn ? "on" : ""}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="hamburgerMenu" className={hamOn ? "on" : ""}>
        <Link to="/">
          <div onClick={() => switchCurrentPostsHandler("DOG")}>DOG</div>
        </Link>
        <Link to="/">
          <div onClick={() => switchCurrentPostsHandler("lookatmydog")}>
            Look At My Dog
          </div>
        </Link>
        <Link to="/">
          <div
            onClick={() => switchCurrentPostsHandler("WhatsWrongWithYourDog")}
          >
            WhatsWrongWithYourDog
          </div>
        </Link>
      </div>
    </nav>
  );
}

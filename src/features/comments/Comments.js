import { useSelector, useDispatch } from "react-redux";
import {
  selectComments,
  selectIsCommentsLoading,
  loadComments,
} from "./commentsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../../app/App.css";
import { calculateElapsed, calculateScore } from "../../utility/utility";

export function Comments() {
  const comments = useSelector(selectComments);
  const isCommentsLoading = useSelector(selectIsCommentsLoading);
  const dispatch = useDispatch();
  const permalink = window.location.pathname;

  if (comments.length === 0) {
    dispatch(loadComments(permalink));
  }

  const commentsForPost = comments[0] ? comments[0].data.children[0].data : "";
  if (isCommentsLoading)
    return (
      <div className="isLoading">
        {isCommentsLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : ""}
      </div>
    );

  return (
    <section id="commentSection" className="fade-in">
      <h2>{commentsForPost.title}</h2>
      <figure>
        <img src={commentsForPost.thumbnail} alt={commentsForPost.title} />
      </figure>
      <p></p>
    </section>
  );
}

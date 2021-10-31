import { useSelector, useDispatch } from "react-redux";
import {
  selectComments,
  selectIsCommentsLoading,
  loadComments,
} from "./commentsSlice";
import { Comment } from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../../app/App.css";
import { calculateElapsed, calculateScore } from "../../utility/utility";
import { useEffect } from "react";

export function Comments() {
  const comments = useSelector(selectComments);
  const isCommentsLoading = useSelector(selectIsCommentsLoading);
  const dispatch = useDispatch();
  const permalink = window.location.pathname;

  useEffect(() => {
    dispatch(loadComments(permalink));
  }, [dispatch]);

  const postOfComments = comments[0] ? comments[0].data.children[0].data : "";
  const commentsOfPost = comments[1] ? comments[1].data.children : [];
  const elapsed = calculateElapsed(postOfComments.created_utc);
  const score = calculateScore(postOfComments.score);

  if (isCommentsLoading)
    return (
      <div className="isLoading">
        {isCommentsLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : ""}
      </div>
    );

  return (
    <section id="commentSection" className="fade-in">
      <div className="leftArea">
        <FontAwesomeIcon icon={faArrowUp} className="arrow" />
        <span className="score">{score}</span>
        <FontAwesomeIcon icon={faArrowDown} className="arrow" />
      </div>
      <div className="rightArea">
        <span className="postedBy">
          Posted by u/{postOfComments.author_fullname} {elapsed}
        </span>
        <h2>{postOfComments.title}</h2>
        <figure>
          <img src={postOfComments.thumbnail} alt={postOfComments.title} />
        </figure>
        <div>
          <h3>Comments</h3>
          {commentsOfPost.map((comment) => {
            return <Comment key={comment.data.id} comment={comment} />;
          })}
        </div>
      </div>
    </section>
  );
}

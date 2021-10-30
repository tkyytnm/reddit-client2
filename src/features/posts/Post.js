import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { selectIsPostsDataLoading } from "./postsSlice";
import "../../app/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Comments } from "../comments/Comments";
import { loadComments } from "../comments/commentsSlice";
import { calculateElapsed, calculateScore } from "../../utility/utility";

export function Post({ post }) {
  const dispatch = useDispatch();
  const isPostsLoading = useSelector(selectIsPostsDataLoading);
  const elapsed = calculateElapsed(post.data.created_utc);
  const score = calculateScore(post.data.score);

  return (
    <article className="fade-in">
      <div className="leftArea">
        <FontAwesomeIcon icon={faArrowUp} className="arrow" />
        <span className="score">{score}</span>
        <FontAwesomeIcon icon={faArrowDown} className="arrow" />
      </div>
      <div className="rightArea">
        <span className="postedBy">
          Posted by u/{post.data.author_fullname} {elapsed}
        </span>
        <h3>
          <Link
            to={post.data.permalink}
            onClick={() => dispatch(loadComments(post.data.permalink))}
          >
            {post.data.title}
          </Link>
        </h3>
        <Link
          to={post.data.permalink}
          onClick={() => dispatch(loadComments(post.data.permalink))}
        >
          <figure>
            <img src={post.data.thumbnail} alt={post.data.title} />
          </figure>
        </Link>
      </div>
      <Switch>
        <Route path={`/:permalink`}>
          <Comments />
        </Route>
      </Switch>
    </article>
  );
}

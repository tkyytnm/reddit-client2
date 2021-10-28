import { useSelector } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { selectIsPostsDataLoading } from "../features/posts/postsSlice";
import "../app/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Comments } from "../features/comments/Comments";

export function Post({ post }) {
  const isLoading = useSelector(selectIsPostsDataLoading);
  const elapsed = calculateElapsed(post.data.created_utc);
  const score = calculateScore(post.data.score);

  return (
    <article className={isLoading ? "isLoading" : ""}>
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
          <Link to={post.data.permalink}>{post.data.title}</Link>
        </h3>
        <Link to={post.data.permalink}>
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

function calculateElapsed(utc) {
  const seconds = Math.floor(new Date().getTime() / 1000) - utc;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 60 / 60);
  const days = Math.floor(seconds / 60 / 60 / 24);
  const months = Math.floor(seconds / 60 / 60 / 24 / 30);
  const years = Math.floor(seconds / 60 / 60 / 24 / 365);

  let result;

  if (years > 0) {
    result = `${years} years ago`;
  } else if (months > 0) {
    result = `${months} months ago`;
  } else if (days > 0) {
    result = `${days} days ago`;
  } else if (hours > 0) {
    result = `${hours} hours ago`;
  } else if (minutes > 0) {
    result = `${minutes} minutes ago`;
  } else if (seconds > 0) {
    result = `${seconds} seconds ago`;
  } else {
    result = "Now";
  }

  return result;
}

function calculateScore(score) {
  if (score > 1000 * 1000) {
    return score / 1000 / 1000 + "m";
  }
  if (score > 1000) {
    return score / 1000 + "k";
  }
  return score;
}

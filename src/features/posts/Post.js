import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "../../app/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { Comments } from "../comments/Comments";
import { calculateElapsed, calculateScore } from "../../utility/utility";

export function Post({ post }) {
  const elapsed = calculateElapsed(post.data.created_utc);
  const score = calculateScore(post.data.score);
  const regex = new RegExp("https://.*[.]jpg");
  const isThumbnail = regex.test(post.data.thumbnail);

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
          <Link to={post.data.permalink}>{post.data.title}</Link>
        </h3>
        <Link to={post.data.permalink}>
          <figure>
            {isThumbnail ? (
              <img src={post.data.thumbnail} alt={post.data.title} />
            ) : (
              <>
                <FontAwesomeIcon icon={faPaw} />
                ...No Thumbnails...
                <FontAwesomeIcon icon={faPaw} />
              </>
            )}
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

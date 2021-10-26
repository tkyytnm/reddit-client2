import { createDispatchHook } from "react-redux";
import "./Post.css";

export function Post({ post }) {
  const elapsed = calculateElapsed(post.data.created_utc);

  return (
    <li>
      <div>
        Posted by u/{post.data.author_fullname} {elapsed}
      </div>
      <h3>{post.data.title}</h3>
      <figure>
        <img src={post.data.thumbnail} alt={post.data.title} />
      </figure>
    </li>
  );
}

function calculateElapsed(utc) {
  // console.log(`utc: ${utc} - now: ${Math.floor(new Date().getTime() / 1000)}`);

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

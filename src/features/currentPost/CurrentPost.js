import { Comments } from "../comments/Comments";

export function CurrentPost({ comments }) {
  return <Comments comments={comments} />;
}

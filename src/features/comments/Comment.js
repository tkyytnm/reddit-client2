export function Comment({ comment }) {
  return (
    <>
      <p className="comment">
        <div className="comment-author">{comment.data.author}</div>
        {comment.data.body}
      </p>
    </>
  );
}

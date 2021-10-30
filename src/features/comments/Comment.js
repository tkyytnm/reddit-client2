export function Comment({ comment }) {
  const showdown = require("showdown");
  const converter = new showdown.Converter();
 
  return (
    <>
      <div className="comment">
        <span className="comment-author">{comment.data.author}</span>
        <div>{decodeHtml(comment.data.body)}</div>
      </div>
    </>
  );
}

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

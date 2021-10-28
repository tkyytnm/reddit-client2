import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { loadComments } from "./commentsSlice";

export function Comments() {
  let { permalink } = useParams();
  console.log(permalink);

  const dispatch = useDispatch();

  dispatch(loadComments(permalink));

  return (
    <section>
      <h2>Comments!</h2>
      <p>permalink: {permalink}</p>
    </section>
  );
}

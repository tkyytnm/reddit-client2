import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsData } from "./postsSlice";
import { selectPosts, selectIsPostsDataLoading } from "./postsSlice";
import { Post } from "../../components/Post";
import "./Posts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Posts() {
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);
  const isPostsDataLoading = useSelector(selectIsPostsDataLoading);

  useEffect(() => {
    dispatch(loadPostsData());
  }, []);

  return (
    <section>
      <div className="isLoading">
        {isPostsDataLoading ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
          ""
        )}
      </div>

      <div className="allPosts">
        {posts.map((post) => {
          return <Post key={post.data.id} post={post} />;
        })}
      </div>
    </section>
  );
}

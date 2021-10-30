import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsData } from "./postsSlice";
import { selectPosts, selectIsPostsDataLoading } from "./postsSlice";
import { Post } from "./Post";
import "../../app/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsData());
  }, [dispatch]);

  const loadedPosts = useSelector(selectPosts);
  const posts = loadedPosts[0] ? loadedPosts[0] : [];
  const isPostsLoading = useSelector(selectIsPostsDataLoading);

  if (isPostsLoading)
    return (
      <div className="isLoading">
        {isPostsLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : ""}
      </div>
    );

  return (
    <section>
      <div className="allPosts">
        {posts.map((post) => {
          return <Post key={post.data.id} post={post} />;
        })}
      </div>
    </section>
  );
}

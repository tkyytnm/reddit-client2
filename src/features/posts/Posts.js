import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsData } from "./postsSlice";
import { selectPosts, selectIsPostsDataLoading } from "./postsSlice";
import { Post } from "../../components/Post";
import "../../app/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsData());
  }, [dispatch]);

  const posts = useSelector(selectPosts);
  const isPostsLoading = useSelector(selectIsPostsDataLoading);

  return (
    <section>
      <div className="isLoading">
        {isPostsLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : ""}
      </div>

      <div className={isPostsLoading ? "isLoading allPosts" : "allPosts"}>
        {posts.map((post) => {
          return <Post key={post.data.id} post={post} onclick={() => dispatch()} />;
        })}
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsData } from "./postsSlice";
import { selectPosts, selectIsPostsDataLoading } from "./postsSlice";
import { Post } from "../../components/Post";
import "./Posts.css";

export function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsData());
  }, []);

  const posts = useSelector(selectPosts);
  const isPostsDataLoading = useSelector(selectIsPostsDataLoading);

  return (
    <section>
      
      <p className="isLoading">{isPostsDataLoading ? "Loading..." : ""}</p>
      
      <ul>
        {posts.map((post) => {
          return <Post key={post.data.id} post={post} />;
        })}
      </ul>
    </section>
  );
}

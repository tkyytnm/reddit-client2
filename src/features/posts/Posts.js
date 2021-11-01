import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsData } from "./postsSlice";
import {
  selectPosts,
  selectCurrentPosts,
  selectIsPostsDataLoading,
  selectIsPostsLoadingHasError,
} from "./postsSlice";
import { Post } from "./Post";
import "../../app/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Search } from "../search/Search";
import { selectSearchTerm } from "../search/searchSlice";

export function Posts() {
  const dispatch = useDispatch();
  const currentPosts = useSelector(selectCurrentPosts);

  useEffect(() => {
    dispatch(loadPostsData(currentPosts));
  }, [currentPosts]);

  const loadedPosts = useSelector(selectPosts);
  const isPostsLoading = useSelector(selectIsPostsDataLoading);
  const isPostsLoadingHasError = useSelector(selectIsPostsLoadingHasError);
  const searchTerm = useSelector(selectSearchTerm);
  console.log(searchTerm);
  const filteredPosts = loadedPosts.filter((post) =>
    post.data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isPostsLoading)
    return (
      <div className="isLoading">
        {isPostsLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : ""}
      </div>
    );

  if (isPostsLoadingHasError) return <div>Error Occurred!</div>;

  return (
    <section>
      <Search />
      <div className="allPosts">
        {filteredPosts.map((post) => {
          return <Post key={post.data.id} post={post} />;
        })}
      </div>
    </section>
  );
}

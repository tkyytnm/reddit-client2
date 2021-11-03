import { postsReducer, switchCurrentPosts } from "./postsSlice";

test("should return the initial state", () => {
  expect(postsReducer(undefined, {})).toEqual({
    posts: [],
    currentPosts: "lookatmydog",
    isPostsLoading: false,
    isPostsLoadingHasError: false,
  });
});

test("should handle a currentPosts being switched from an initial string", () => {
  expect(postsReducer(undefined, switchCurrentPosts("DOG"))).toEqual({
    posts: [],
    currentPosts: "DOG",
    isPostsLoading: false,
    isPostsLoadingHasError: false,
  });
});

test("should handle a currentPosts being switched from an exiting string", () => {
  const previousState = {
    posts: [],
    currentPosts: "DOG",
    isPostsLoading: false,
    isPostsLoadingHasError: false,
  };
  expect(
    postsReducer(previousState, switchCurrentPosts("WhatsWrongWithYourDog"))
  ).toEqual({
    posts: [],
    currentPosts: "WhatsWrongWithYourDog",
    isPostsLoading: false,
    isPostsLoadingHasError: false,
  });
});

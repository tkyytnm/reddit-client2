import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { postsReducer } from "./src/features/posts/postsSlice";
import { commentsReducer } from "./src/features/comments/commentsSlice";
import { searchReducer } from "./src/features/search/searchSlice";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        search: searchReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPostsData = createAsyncThunk(
  "posts/loadPostsData",
  async (currentPosts) => {
    const response = await fetch(
      `https://www.reddit.com/r/${currentPosts}.json`
    );
    const json = await response.json();
    return json;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    currentPosts: "DOG",
    isPostsLoading: false,
    isPostsLoadingHasError: false,
  },
  reducers: {
    switchCurrentPosts: (state, action) => {
      state.currentPosts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPostsData.pending, (state) => {
        state.isPostsLoading = true;
        state.isPostsLoadingHasError = false;
      })
      .addCase(loadPostsData.fulfilled, (state, action) => {
        state.posts = action.payload.data.children;
        state.isPostsLoading = false;
        state.isPostsLoadingHasError = false;
      })
      .addCase(loadPostsData.rejected, (state) => {
        state.isPostsLoading = false;
        state.isPostsLoadingHasError = true;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectCurrentPosts = (state) => state.posts.currentPosts;
export const selectIsPostsDataLoading = (state) => state.posts.isPostsLoading;
export const selectIsPostsLoadingHasError = (state) =>
  state.posts.isPostsLoadingHasError;

export const { switchCurrentPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;

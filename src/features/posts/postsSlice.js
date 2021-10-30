import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPostsData = createAsyncThunk(
  "posts/loadPostsData",
  async () => {
    const response = await fetch(`https://www.reddit.com/r/DOG.json`);
    const json = await response.json();
    return json;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isPostsLoading: false,
    isPostsLoadingHasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPostsData.pending, (state) => {
        state.isPostsLoading = true;
        state.isPostsLoadingHasError = false;
      })
      .addCase(loadPostsData.fulfilled, (state, action) => {
        state.posts.push(action.payload.data.children);
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
export const selectIsPostsDataLoading = (state) =>
  state.posts.isPostsLoading;

export const postsReducer = postsSlice.reducer;

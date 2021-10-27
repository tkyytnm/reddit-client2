import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPostsData = createAsyncThunk("posts/loadPostsData", async () => {
  const response = await fetch(`https://www.reddit.com/r/DOG.json?after=t3_qg77k9`);
  const json = await response.json();
  return json;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isPostsDataLoading: false,
    loadPostsDataHasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPostsData.pending, (state, action) => {
        state.isPostsDataLoading = true;
        state.loadPostsDataHasError = false;
      })
      .addCase(loadPostsData.fulfilled, (state, action) => {
        state.posts = action.payload.data.children;
        state.isPostsDataLoading = false;
        state.loadPostsDataHasError = false;
      })
      .addCase(loadPostsData.rejected, (state, action) => {
        state.isPostsDataLoading = false;
        state.loadPostsDataHasError = true;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectIsPostsDataLoading = (state) => state.posts.isPostsDataLoading;

export const postsReducer = postsSlice.reducer;

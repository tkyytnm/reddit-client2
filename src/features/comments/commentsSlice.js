import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (permalink) => {
    const location = permalink.substring(0, permalink.length - 1);
    const response = await fetch(`https://www.reddit.com${location}.json`);
    const json = await response.json();
    return json;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    permalink: "",
    comments: [],
    isCommentLoading: false,
    isCommentLoadingHasError: false,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.isCommentLoading = true;
        state.isCommentLoadingHasError = false;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentLoading = false;
        state.isCommentLoadingHasError = false;
      })
      .addCase(loadComments.rejected, (state) => {
        state.isCommentLoading = false;
        state.isCommentLoadingHasError = true;
      });
  },
});

export const selectComments = (state) => state.comments.comments;
export const commentsReducer = commentsSlice.reducer;
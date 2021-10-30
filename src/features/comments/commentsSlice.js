import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (permalink) => {
    const location = permalink.substring(1, permalink.length - 1);
    const response = await fetch(`https://www.reddit.com/${location}.json`);
    const json = await response.json();
    return json;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    isCommentsLoading: false,
    isCommentsLoadingHasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.isCommentsLoading = true;
        state.isCommentsLoadingHasError = false;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsLoading = false;
        state.isCommentsLoadingHasError = false;
      })
      .addCase(loadComments.rejected, (state) => {
        state.isCommentsLoading = false;
        state.isCommentsLoadingHasError = true;
      });
  },
});

export const selectComments = (state) => state.comments.comments;
export const selectIsCommentsLoading = (state) =>
  state.comments.isCommentsLoading;
export const commentsReducer = commentsSlice.reducer;

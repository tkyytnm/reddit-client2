import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../features/posts/postsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { searchReducer } from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    search: searchReducer
  },
});

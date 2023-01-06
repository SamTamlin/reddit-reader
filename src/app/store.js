import { configureStore } from '@reduxjs/toolkit';
import postListReducer from '../features/postList/postListSlice';

export const store = configureStore({
  reducer: {
    postList: postListReducer,
  },
});

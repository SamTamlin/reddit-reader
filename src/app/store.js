import { configureStore } from '@reduxjs/toolkit';
import postListReducer from '../features/postList/postListSlice';
import postSliceReducer from '../features/post/postSlice'

export const store = configureStore({
  reducer: {
    postList: postListReducer,
    post: postSliceReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import postListReducer from '../pages/postList/postListSlice';
import postSliceReducer from '../pages/post/postSlice'
import searchSliceReducer from '../pages/search/searchSlice';

export const store = configureStore({
  reducer: {
    postList: postListReducer,
    post: postSliceReducer,
    search: searchSliceReducer,
  },
});

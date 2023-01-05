import { configureStore } from '@reduxjs/toolkit';
import popularReducer from '../features/popular/popularSlice';

export const store = configureStore({
  reducer: {
    popular: popularReducer,
  },
});

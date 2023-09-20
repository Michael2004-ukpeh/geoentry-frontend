import { configureStore } from '@reduxjs/toolkit';
import entryReducer from '../features/entrySlice';
import authReducer from '../features/authSlice';
const store = configureStore({
  reducer: {
    entry: entryReducer,
    auth: authReducer,
  },
});

export default store;

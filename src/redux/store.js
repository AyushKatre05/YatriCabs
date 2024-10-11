import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice.js';

export const store = configureStore({
  reducer: {
    form: formReducer,  // Our form slice
  },
});

import { configureStore } from '@reduxjs/toolkit';
import { displaySlice } from './reducer/displaySlice';
import { historySlice } from './reducer/historySlice';

export const store = configureStore({
  reducer: {
    display: displaySlice.reducer,
    history: historySlice.reducer
  },
});

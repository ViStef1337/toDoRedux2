import { configureStore } from '@reduxjs/toolkit';
import { toDoReducer } from './toDoSlice.js';
import { filterReducer } from './filterSlice.js';

export const store = configureStore({
  reducer: { toDos: toDoReducer, filter: filterReducer },
});

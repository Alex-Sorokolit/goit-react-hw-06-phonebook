// файл створення стор Redux
import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
import { contactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

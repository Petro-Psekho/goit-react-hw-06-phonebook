import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    contacts: (state, action) => {
      // eslint-disable-next-line no-unused-expressions
      state.contacts;
    },
  },
});

export const { contacts } = contactsSlice.actions;

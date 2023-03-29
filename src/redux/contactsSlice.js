import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: {
      reduser(state, action) {
        state.contacts.push(action.payload);
      },
      addId(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },

    delContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

const persistConfig = {
  key: 'phonebook',
  storage,
};
export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, delContact } = contactsSlice.actions;

export const getContactsItems = state => state.phonebook.contacts;

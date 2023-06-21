import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const contactsSlice = createSlice({
  name: 'contacts',
  // initialState,

  initialState: {
    items: data,
  },

  reducers: {
    addContact(state, action) {
      state.items.unshift(action.payload);
    },

    deliteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deliteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;

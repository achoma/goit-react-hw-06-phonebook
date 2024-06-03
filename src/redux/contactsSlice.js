import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const { name, number } = action.payload;
        const isExist = state.contacts.some(
          contact => contact.name.toLowerCase() === name.trim().toLowerCase()
        );
        if (isExist) {
          alert(`${name} is already in contacts!`);
        } else {
          state.contacts.push({ id: nanoid(), name, number });
        }
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

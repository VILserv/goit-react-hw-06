import { createSlice, nanoid } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        const existingContact = state.items.find(
          (contact) =>
            contact.name === action.payload.name ||
            contact.number === action.payload.number
        );
        if (!existingContact) {
          state.items.push(action.payload);
          state.error = null;
        } else {
          state.error = "Contact with the same name or number already exists!";
        }
      },
      prepare(contactInfo) {
        return {
          payload: {
            id: nanoid(),
            ...contactInfo,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { addContact, deleteContact, clearError } = slice.actions;

export const selectItems = (state) => state.contacts.items;

export const selectError = (state) => state.contacts.error;

export default slice.reducer;

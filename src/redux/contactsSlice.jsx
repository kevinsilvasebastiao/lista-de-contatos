import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
name: 'contacts',
initialState,
reducers: {
    addContact: (state, action) => {
    state.push(action.payload);
    },
    removeContact: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
    },
    editContact: (state, action) => {
    const { id, updatedContact } = action.payload;
    const index = state.findIndex(contact => contact.id === id);
    if (index !== -1) {
        state[index] = updatedContact;
    }
    }
}
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;

export default contactsSlice.reducer;

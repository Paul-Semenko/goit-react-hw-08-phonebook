import { createReducer, createSlice } from "@reduxjs/toolkit";
import { changeFilter } from "./actions";
import { addContacts, deleteContacts, getContacts } from "./operations";

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contact: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [getContacts.pending]: (state, action) => ({
            ...state, loading: true,
        }),
        [getContacts.fulfilled]: (state, action) => ({
            ...state, contact: action.payload, loading: false,
        }),
        [getContacts.rejected]: (state, action) => ({
            ...state, loading: false, error: action.payload,
            
        }),
        [addContacts.pending]: (state, action) => {
            return { ...state, loading: true, };
        },
        [addContacts.fulfilled]: (state, action) => {
            return {
                ...state, contact: [...state.contact, action.payload],
                loading: false,
            };
        },
        [addContacts.rejected]: (state, action) => {
            return {
                ...state, loading: false, error: action.payload,
            };
        },
        [deleteContacts.pending]: (state, action) => ({
            ...state, loading: true,
        }),
        [deleteContacts.fulfilled]: (state, action) => ({
            ...state, contact: state.contact.filter(({ id }) => id !== action.payload),
            loading: false,
        }),
        [deleteContacts.rejected]: (state, action) => ({
            ...state, loading: false, error: action.payload,
        }),
    }
});


export default contactSlice.reducer;

export const filterReducer = createReducer('', {
    
    [changeFilter]: (_, action) => action.payload,
    
});
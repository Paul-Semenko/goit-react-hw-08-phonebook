import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://conections-api.herokuapp.com';

export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
export const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async (contact, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
export const deleteContacts = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactId, { rejectWithValue }) => {
        try {
            const { status } = await axios.delete(`/contacts/${contactId}`);
            if (status === 200) {
                return contactId;
            }
            else {
                throw new Error({ message: 'error' });
            }
        } catch (error) {
            return rejectWithValue(error.message);
      }
    },
);
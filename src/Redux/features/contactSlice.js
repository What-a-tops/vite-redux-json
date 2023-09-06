import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const url = import.meta.env.VITE_REACT_APP_API

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json;odata.metadata=full',
    'Content-Type': 'application/json',
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        datas: [],
        data: {},
        loading: false,
    },
    reducers: {
        getContacts: (state, action) => {
            state.datas = action.payload
        },
        getContact: (state, action) => {
            state.data = action.payload
        },
        contactAdded: (state, action) => {
            state.datas.push(action.payload)
        },
        contactDeleted: (state, action) => {
            console.log(1)
            state.datas = state.datas.filter(
                (item) => item.id !== action.payload
            )
        },
        contactEdited: (state, action) => {
            state.data = state.data.map((item) => 
                item.id === action.payload.id ? action.payload : item
            )
        },
    }
})

export const loadContacts = () => async dispatch => {
    try {
        const response = await axios.get(`${url}`, { headers })
        dispatch(getContacts(response.data))
    } catch (err) {
        throw new Error(err)
    }   
}

export const loadContact = (id) => async dispatch => {
    try {
        const response = await axios.get(`${url}/${id}`, { headers })
        dispatch(getContact(response.data))
    } catch (err) {
        throw new Error(err)
    }  
}

export const addContact = (user) => async dispatch => {
    try {
        await axios.post(`${url}`, user, { headers })
        dispatch(contactAdded(user))
    } catch (err) {
        throw new Error(err)
    }  
}

export const deleteContact = id => async dispatch => {
    try {
        await axios.delete(`${url}/${id}`, { headers })
        dispatch(contactDeleted())
        dispatch(loadContacts())
    } catch (err) {
        throw new Error(err)
    }
}

export const editContact = (user, id) => async dispatch => {
    try {
        await axios.put(`${url}/${id}`, user, { headers })
        dispatch(loadContacts())
    } catch (err) {
        throw new Error(err)
    }
}

export const {
    getContact, 
    getContacts, 
    contactAdded,  
    contactDeleted,
    contactEdited 
} = contactSlice.actions
export default contactSlice.reducer
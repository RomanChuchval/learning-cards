import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'modals',
    initialState: {
        open: false as boolean,
    },
    reducers: {
        openModal: state => {
            state.open = true
        },
        closeModal: state => {
            state.open = false
        },
    },
})

export const modalsActions = slice.actions
export const modalsReducer = slice.reducer

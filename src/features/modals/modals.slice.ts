import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: initialStateType = {
    showCreateModal: false,
    showUpdateModal: false,
    showRemoveModal: false,
    defaultValues: {
        packId: '',
        packName: '',
        question: '',
        answer: '',
    }
}

const slice = createSlice({
    name: 'modals',
    initialState: initialState,
    reducers: {
        showCreateModal: (state, action: PayloadAction<defaultValuesArgType>) => {
            state.showCreateModal = true
            state.defaultValues = {...state.defaultValues, ...action.payload}
        },
        showUpdateModal: (state, action: PayloadAction<defaultValuesArgType>) => {
            state.showUpdateModal = true
            state.defaultValues = {...state.defaultValues, ...action.payload}
        },
        showRemoveModal: (state, action:  PayloadAction<defaultValuesArgType>) => {
            state.showRemoveModal = true
            state.defaultValues = {...state.defaultValues, ...action.payload}
        },
        closeModal: () => initialState
    }
})

export const modalsReducer = slice.reducer
export const modalsAction = slice.actions


//types
type defaultValuesArgType = Partial<defaultValuesType>

type defaultValuesType = {
    packId: string
    packName: string
    question: string
    answer: string
}

type initialStateType = {
    showCreateModal: boolean
    showUpdateModal: boolean
    showRemoveModal: boolean
    defaultValues: defaultValuesType
}
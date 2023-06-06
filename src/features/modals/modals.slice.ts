import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ModalsInitialStateType = {
    showCreateModal: false,
    showUpdateModal: false,
    showRemoveModal: false,
    modalState: {
        packId: '',
        cardId: '',
        packName: '',
        question: '',
        answer: '',
        packImg: '',
        questionImg: '',
        answerImg: '',
    },
}

const slice = createSlice({
    name: 'modals',
    initialState: initialState,
    reducers: {
        showCreateModal: (state, action: PayloadAction<ModalStateArgsType>) => {
            state.showCreateModal = true
            state.modalState = { ...state.modalState, ...action.payload }
        },
        showUpdateModal: (state, action: PayloadAction<ModalStateArgsType>) => {
            state.showUpdateModal = true
            state.modalState = { ...state.modalState, ...action.payload }
        },
        showRemoveModal: (state, action: PayloadAction<ModalStateArgsType>) => {
            state.showRemoveModal = true
            state.modalState = { ...state.modalState, ...action.payload }
        },
        closeModal: () => initialState,
    },
})

export const modalsReducer = slice.reducer
export const modalsAction = slice.actions

//types
export type ModalStateArgsType = Partial<ModalStateType>
type ModalStateType = {
    packId: string
    cardId: string
    packName: string
    question: string
    answer: string
    packImg: string
    questionImg: string
    answerImg: string
}
export type ModalsInitialStateType = {
    showCreateModal: boolean
    showUpdateModal: boolean
    showRemoveModal: boolean
    modalState: ModalStateType
}

import { describe, expect, it } from '@jest/globals'
import {
    modalsAction,
    ModalsInitialStateType,
    modalsReducer,
    ModalStateArgsType,
} from 'features/modals/modals.slice'

describe('cards slice', () => {
    let initialState: ModalsInitialStateType
    const modalState: ModalStateArgsType = {
        packId: 'packId',
        cardId: 'cardId',
        packName: 'packName',
        question: 'question',
        answer: 'answer',
        questionImg: 'questionImage',
        answerImg: 'answerImage',
    }
    beforeEach(() => {
        initialState = {
            showCreateModal: false,
            showUpdateModal: false,
            showRemoveModal: false,
            modalState: {
                packId: '',
                cardId: '',
                packName: '',
                question: '',
                answer: '',
                questionImg: '',
                answerImg: '',
            },
        }
    })

    it('should set modalState and toggle showCreateModal flag correctly', () => {
        const nextState = modalsReducer(initialState, modalsAction.showCreateModal(modalState))

        expect(nextState.showCreateModal).toEqual(true)
        expect(nextState.showUpdateModal).toEqual(false)
        expect(nextState.showRemoveModal).toEqual(false)
        expect(nextState.modalState).toEqual(modalState)
    })

    it('should set modalState and toggle showUpdateModal flag correctly', () => {
        const nextState = modalsReducer(initialState, modalsAction.showUpdateModal(modalState))

        expect(nextState.showUpdateModal).toEqual(true)
        expect(nextState.showRemoveModal).toEqual(false)
        expect(nextState.showCreateModal).toEqual(false)
        expect(nextState.modalState).toEqual(modalState)
    })

    it('should set modalState and toggle showRemoveModal flag correctly', () => {
        const nextState = modalsReducer(initialState, modalsAction.showRemoveModal(modalState))

        expect(nextState.showUpdateModal).toEqual(false)
        expect(nextState.showRemoveModal).toEqual(true)
        expect(nextState.showCreateModal).toEqual(false)
        expect(nextState.modalState).toEqual(modalState)
    })

    it('should set state to initial value when modal closed correctly', () => {
        const startState: ModalsInitialStateType = {
            showCreateModal: true,
            showUpdateModal: false,
            showRemoveModal: false,
            modalState: {
                packId: 'packId',
                cardId: 'cardId',
                packName: 'packName',
                question: 'question',
                answer: 'answer',
                questionImg: 'questionImage',
                answerImg: 'answerImage',
            },
        }
        const nextState = modalsReducer(startState, modalsAction.closeModal())

        expect(nextState).toEqual(initialState)
    })
})

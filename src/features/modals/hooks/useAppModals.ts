import { modalsAction } from 'features/modals/modals.slice'
import {
    isModalOpenSelector,
    modalActionSelector,
    modalStateSelector,
} from 'features/modals/modals.selector'
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'app'

export const useAppModals = () => {
    const dispatch = useAppDispatch()

    const modalsState = useAppSelector(modalStateSelector)
    const modalAction = useAppSelector(modalActionSelector)
    const isModalOpen = useAppSelector(isModalOpenSelector)

    const packCover = modalsState.packCover
    const packName = modalsState.packName
    const cardQuestion = modalsState.question
    const cardQuestionImg = modalsState.questionImg

    const handleClose = useCallback(() => {
        dispatch(modalsAction.closeModal())
    }, [])

    const getModalTitle = () => {
        switch (modalAction) {
            case 'updatePack':
            case 'popoverUpdatePack':
                return 'Update pack'
            case 'removePack':
            case 'popoverRemovePack':
                return 'Remove pack'
            case 'createCard':
                return 'Create card'
            case 'updateCard':
                return 'Update card'
            case 'createPack':
                return 'Create pack'
            case 'removeCard':
                return 'Remove card'
            default:
                return ''
        }
    }
    const modalTitle = getModalTitle()

    return {
        handleClose,
        packCover,
        packName,
        cardQuestion,
        cardQuestionImg,
        isModalOpen,
        modalAction,
        modalTitle,
    }
}

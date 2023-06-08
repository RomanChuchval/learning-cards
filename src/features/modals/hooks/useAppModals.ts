import { modalsAction } from 'features/modals/modals.slice'
import {
    isModalOpenSelector,
    modalActionSelector,
    modalStateSelector, withRedirectModalSelector
} from 'features/modals/modals.selector'
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'app'

export const useAppModals = () => {
    const dispatch = useAppDispatch()

    const modalsState = useAppSelector(modalStateSelector)
    const modalAction = useAppSelector(modalActionSelector)
    const isModalOpen = useAppSelector(isModalOpenSelector)
    const withRedirect = useAppSelector(withRedirectModalSelector)

    const packCover = modalsState.packCover
    const packName = modalsState.packName
    const cardQuestion = modalsState.question
    const cardQuestionImg = modalsState.questionImg


    const handleClose = useCallback(() => {
        dispatch(modalsAction.closeModal())
    }, [dispatch])

    const getModalTitle = () => {
        switch (modalAction) {
            case 'createPack':
                return 'Create pack'
            case 'updatePack':
                return 'Update pack'
            case 'removePack':
                return 'Remove pack'
            case 'createCard':
                return 'Create card'
            case 'updateCard':
                return 'Update card'
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
        withRedirect
    }
}

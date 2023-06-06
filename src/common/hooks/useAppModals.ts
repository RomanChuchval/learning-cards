import { modalsAction, ModalStateArgsType } from 'features/modals/modals.slice'
import {
    cardIdsSelector, modalStateSelector,
    packIdSelector,
    showCreateModalSelector,
    showRemoveModalSelector,
    showUpdateModalSelector
} from 'features/modals/modals.selector'
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'app'

export const useAppModals = (modalState: ModalStateArgsType = {}) => {
    const dispatch = useAppDispatch()
    const showUpdateModal = useAppSelector(showUpdateModalSelector)
    const showCreateModal = useAppSelector(showCreateModalSelector)
    const showRemoveModal = useAppSelector(showRemoveModalSelector)
    const modalsState = useAppSelector(modalStateSelector)
    const selectedPackId = useAppSelector(packIdSelector)
    const selectedCardId = useAppSelector(cardIdsSelector)

    const openUpdateModal = useCallback(() => {
        dispatch(modalsAction.showUpdateModal(modalState))
    }, [modalState])

    const openCreateModal = useCallback(() => {
        dispatch(modalsAction.showCreateModal(modalState))
    }, [modalState])

    const openRemoveModal = useCallback(() => {
        dispatch(modalsAction.showRemoveModal(modalState))
    }, [modalState])

    const handleClose = useCallback(() => {
        dispatch(modalsAction.closeModal())
    }, [])

    const isSelectedCard = selectedCardId === modalState.cardId
    const isSelectedPack = selectedPackId === modalState.packId

    const packImg = modalsState.packImg
    const packName = modalsState.packName
    return {
        openUpdateModal,
        openCreateModal,
        openRemoveModal,
        showUpdateModal,
        showCreateModal,
        showRemoveModal,
        handleClose,
        packImg,
        packName,
        selectedPackId,
        selectedCardId,
        isSelectedCard,
        isSelectedPack,
    }
}

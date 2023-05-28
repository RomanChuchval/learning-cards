import { modalsAction, ModalStateArgsType } from 'features/modals/modals.slice'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { useAppSelector } from 'app/hooks/useAppSelector'
import {
    cardIdsSelector,
    packIdSelector,
    showCreateModalSelector,
    showRemoveModalSelector,
    showUpdateModalSelector,
} from 'features/modals/modals.selector'
import { useCallback } from 'react'

export const useAppModals = (modalState: ModalStateArgsType = {}) => {
    const dispatch = useAppDispatch()
    const showUpdateModal = useAppSelector(showUpdateModalSelector)
    const showCreateModal = useAppSelector(showCreateModalSelector)
    const showRemoveModal = useAppSelector(showRemoveModalSelector)
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

    return {
        openUpdateModal,
        openCreateModal,
        openRemoveModal,
        showUpdateModal,
        showCreateModal,
        showRemoveModal,
        handleClose,
        selectedPackId,
        selectedCardId,
        isSelectedCard,
        isSelectedPack,
    }
}

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

export const useAppModals = (modalState: ModalStateArgsType = {}) => {
    const dispatch = useAppDispatch()
    const showUpdateModal = useAppSelector(showUpdateModalSelector)
    const showCreateModal = useAppSelector(showCreateModalSelector)
    const showRemoveModal = useAppSelector(showRemoveModalSelector)
    const selectedPackId = useAppSelector(packIdSelector)
    const selectedCardId = useAppSelector(cardIdsSelector)

    const openUpdateModal = () => {
        dispatch(modalsAction.showUpdateModal(modalState))
    }
    const openCreateModal = () => {
        dispatch(modalsAction.showCreateModal(modalState))
    }
    const openRemoveModal = () => {
        dispatch(modalsAction.showRemoveModal(modalState))
    }
    const handleClose = () => {
        dispatch(modalsAction.closeModal())
    }

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

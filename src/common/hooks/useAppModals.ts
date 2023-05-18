import { modalsAction } from 'features/modals/modals.slice'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { useAppSelector } from 'app/hooks/useAppSelector'
import {
    packIdModalsSelector,
    showCreateModalSelector,
    showRemoveModalSelector,
    showUpdateModalSelector
} from 'features/modals/modals.selector'

export const useAppModals = (packId?: string, packName?: string) => {
    const dispatch = useAppDispatch()
    const showUpdateModal = useAppSelector(showUpdateModalSelector)
    const showCreateModal = useAppSelector(showCreateModalSelector)
    const showRemoveModal = useAppSelector(showRemoveModalSelector)
    const selectedPackId = useAppSelector(packIdModalsSelector)

    const openUpdateModal = () => {
        dispatch(modalsAction.showUpdateModal({packId, packName}))
    }
    const openCreateModal = () => {
        dispatch(modalsAction.showCreateModal({packId, packName}))
    }
    const openRemoveModal = () => {
        dispatch(modalsAction.showRemoveModal({packId, packName}))
    }
    const handleClose = () => {
        dispatch(modalsAction.closeModal())
    }

    return {
        openUpdateModal,
        openCreateModal,
        openRemoveModal,
        showUpdateModal,
        showCreateModal,
        showRemoveModal,
        handleClose,
        selectedPackId
    }
}
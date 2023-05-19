import { RootState } from 'app/store'

const modalStateSelector = (state: RootState) => state.modals.modalState
const packIdSelector = (state: RootState) => state.modals.modalState.packId
const cardIdsSelector = (state: RootState) => state.modals.modalState.cardId
const showCreateModalSelector = (state: RootState) => state.modals.showCreateModal
const showUpdateModalSelector = (state: RootState) => state.modals.showUpdateModal
const showRemoveModalSelector = (state: RootState) => state.modals.showRemoveModal

export {
    modalStateSelector,
    showCreateModalSelector,
    showUpdateModalSelector,
    showRemoveModalSelector,
    packIdSelector,
    cardIdsSelector,
}

import { RootState } from 'app/store'

const defaultValuesSelector = (state: RootState) => state.modals.defaultValues
const packIdModalsSelector = (state: RootState) => state.modals.defaultValues.packId
const showCreateModalSelector = (state: RootState) => state.modals.showCreateModal
const showUpdateModalSelector = (state: RootState) => state.modals.showUpdateModal
const showRemoveModalSelector = (state: RootState) => state.modals.showRemoveModal

export {
    packIdModalsSelector,
    showCreateModalSelector,
    showUpdateModalSelector,
    showRemoveModalSelector,
    defaultValuesSelector
}
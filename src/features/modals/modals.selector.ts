import { RootState } from 'app/store'

const defaultValuesSelector = (state: RootState) => state.modals.defaultValues
const packIdModalsSelector = (state: RootState) => state.modals.defaultValues.packId
// const answerModalsSelector = (state: RootState) => state.modals.defaultValues.answer
// const questionModalsSelector = (state: RootState) => state.modals.defaultValues.question
const showCreateModalSelector = (state: RootState) => state.modals.showCreateModal
const showUpdateModalSelector = (state: RootState) => state.modals.showUpdateModal
const showRemoveModalSelector = (state: RootState) => state.modals.showRemoveModal

export {
    // answerModalsSelector,
    packIdModalsSelector,
    // questionModalsSelector,
    // packNameModalsSelector,
    showCreateModalSelector,
    showUpdateModalSelector,
    showRemoveModalSelector,
    defaultValuesSelector
}
import { RootState } from 'app/store'

const modalStateSelector = (state: RootState) => ({
    packName: state.modals.modalState.packName,
    question: state.modals.modalState.question === ' ' ? '' : state.modals.modalState.question,
    answer: state.modals.modalState.answer === ' ' ? '' : state.modals.modalState.answer,
    packImg: state.modals.modalState.packImg,
    questionImg: state.modals.modalState.questionImg,
    answerImg: state.modals.modalState.answerImg,
})
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

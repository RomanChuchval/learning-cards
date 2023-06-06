import { RootState } from 'app/store'

const modalStateSelector = (state: RootState) => ({
    packName: state.modals.modalState.packName,
    question: state.modals.modalState.question === ' ' ? '' : state.modals.modalState.question,
    answer: state.modals.modalState.answer === ' ' ? '' : state.modals.modalState.answer,
    packCover: state.modals.modalState.packCover,
    questionImg: state.modals.modalState.questionImg,
    answerImg: state.modals.modalState.answerImg,
})
const packIdSelector = (state: RootState) => state.modals.modalState.packId
const cardIdsSelector = (state: RootState) => state.modals.modalState.cardId
const modalActionSelector = (state: RootState) => state.modals.modalAction
const isModalOpenSelector = (state: RootState) => state.modals.isOpen

export {
    modalStateSelector,
    packIdSelector,
    cardIdsSelector,
    modalActionSelector,
    isModalOpenSelector,
}

import { RootState } from 'app/store'

const learnSelector = (state: RootState) => state.learn.cards
const counterLearnSelector = (state: RootState) => state.learn.answersCount
const selectedPackIdSelector = (state: RootState) => state.learn.selectedPackId

export { learnSelector, counterLearnSelector, selectedPackIdSelector }
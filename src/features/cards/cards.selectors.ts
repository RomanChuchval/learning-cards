import { RootState } from 'app/store'

const cardsSelector = (state: RootState) => state.cards.cards.cards
const cardsPageCountSelector = (state: RootState) => state.cards.cards.pageCount
const cardsPageSelector = (state: RootState) => state.cards.cards.page
const selectedCardsPackIdSelector = (state: RootState) => state.cards.selectedCardsPackId
const cardsTotalCountSelector = (state: RootState) => state.cards.cards.cardsTotalCount
const packUserIdSelector = (state: RootState) => state.cards.cards.packUserId

export {
    cardsSelector,
    cardsPageCountSelector,
    cardsPageSelector,
    cardsTotalCountSelector,
    selectedCardsPackIdSelector,
    packUserIdSelector,
}

import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { useAppSelector } from 'app/hooks/useAppSelector'
import {
    cardsPageCountSelector,
    cardsPageSelector,
    cardsSelector,
    cardsTotalCountSelector,
    selectedCardsPackIdSelector,
} from 'features/cards/cards.selectors'
import { cardsActions, cardsThunks } from 'features/cards/cards.slice'
import { GetCardsParamsType } from 'features/cards/cards.api'

export const useCards = () => {
    const dispatch = useAppDispatch()
    const cards = useAppSelector(cardsSelector)
    const cardsTotalCount = useAppSelector(cardsTotalCountSelector)
    const cardsPage = useAppSelector(cardsPageSelector)
    const cardsPageCount = useAppSelector(cardsPageCountSelector)
    const selectedCardsPackId = useAppSelector(selectedCardsPackIdSelector)

    const getCardsWithParams = (params: GetParamsType) => {
        dispatch(cardsActions.setCardsParams({ params }))
        dispatch(cardsThunks.getCards())
    }

    const onChangePagination = (page: string, pageCount: string) => {
        getCardsWithParams({ page, pageCount })
    }

    return {
        cards,
        cardsTotalCount,
        cardsPage,
        cardsPageCount,
        onChangePagination,
    }
}

//TYPES
export type GetParamsType = Omit<GetCardsParamsType, 'cardsPack_id'>

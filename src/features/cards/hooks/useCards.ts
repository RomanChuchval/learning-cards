import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { useAppSelector } from 'app/hooks/useAppSelector'
import {
    cardsPageCountSelector,
    cardsPageSelector,
    cardsSelector,
    cardsTotalCountSelector,
    packUserIdSelector,
} from 'features/cards/cards.selectors'
import { cardsActions, cardsThunks } from 'features/cards/cards.slice'
import { GetCardsParamsType } from 'features/cards/cards.api'
import { useState } from 'react'

export const useCards = () => {
    const dispatch = useAppDispatch()

    const cards = useAppSelector(cardsSelector)
    const cardsTotalCount = useAppSelector(cardsTotalCountSelector)
    const cardsPage = useAppSelector(cardsPageSelector)
    const cardsPageCount = useAppSelector(cardsPageCountSelector)
    const packUserId = useAppSelector(packUserIdSelector)

    const [searchValue, setSearchValue] = useState<string>('')
    const [timeoutId, setTimeoutId] = useState<number>()

    const getCardsWithParams = (params: GetParamsType) => {
        dispatch(cardsActions.setCardsParams({ params }))
        dispatch(cardsThunks.getCards())
    }

    const debouncedSearch = (value: string) => {
        setSearchValue(value)
        clearTimeout(timeoutId)
        setTimeoutId(
            window.setTimeout(() => {
                getCardsWithParams({ cardQuestion: value })
                setTimeoutId(undefined)
            }, 850)
        )
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
        debouncedSearch,
        searchValue,
        packUserId,
    }
}

//TYPES
export type GetParamsType = Omit<GetCardsParamsType, 'cardsPack_id'>

import { useAppDispatch, useAppSelector } from 'app'
import {
    cardsPageCountParamsSelector,
    cardsPageCountSelector,
    cardsPageSelector,
    cardsSelector,
    cardsTotalCountSelector,
    packUserIdSelector,
} from 'features/cards/cards.selectors'
import { cardsActions, cardsThunks } from 'features/cards/cards.slice'
import { GetCardsParamsType } from 'features/cards/cards.api'
import { useState } from 'react'
import { selectedPackSelector } from 'features/packs/packs.selectors'
import { cardIdsSelector } from 'features/modals/modals.selector'

export const useCards = () => {
    const dispatch = useAppDispatch()

    const cards = useAppSelector(cardsSelector)
    const cardsTotalCount = useAppSelector(cardsTotalCountSelector)
    const cardsPage = useAppSelector(cardsPageSelector)
    const cardsPageCount = useAppSelector(cardsPageCountSelector)
    const packUserId = useAppSelector(packUserIdSelector)
    const selectedPack = useAppSelector(selectedPackSelector)
    const selectedCardId = useAppSelector(cardIdsSelector)
    const cardsPageCountParams = useAppSelector(cardsPageCountParamsSelector)

    const [searchValue, setSearchValue] = useState<string>('')
    const [timeoutId, setTimeoutId] = useState<number>()
    const [sort, setSort] = useState<boolean>(false)

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
    const onChangeSort = () => {
        const sortCards = sort ? '1grade' : '0grade'
        getCardsWithParams({ sortCards })
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
        selectedPack,
        selectedCardId,
        cardsPageCountParams,
        onChangeSort,
        setSort,
        sort,
    }
}

//TYPES
export type GetParamsType = Omit<GetCardsParamsType, 'cardsPack_id'>

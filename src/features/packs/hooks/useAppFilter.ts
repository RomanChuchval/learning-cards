import { useAppDispatch, useAppSelector } from 'app/hooks/hooks'
import { packsSelectors } from 'features/packs/packs.selectors'
import { useState } from 'react'
import { userIdSelector } from 'features/auth/auth.selectors'
import { useSearchParams } from 'react-router-dom'
import { packsThunks } from 'features/packs/packs.slice'

export const useAppFilter = () => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState(true)
    const [timoutId, setTimeoutId] = useState<number | undefined>(undefined)
    const packs = useAppSelector(packsSelectors)
    const userId = useAppSelector(userIdSelector)
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    const filterHandler = (paramsArg: {}) => {
        const params = Object.fromEntries(searchParams)
        dispatch(packsThunks.getPacks({
            page: '1',
            pageCount: packs.pageCount + '',
            min: packs.minCardsCount + '',
            max: packs.maxCardsCount + '',
            user_id: '',
            packName: '',
            sortPacks: '0updated',
            ...paramsArg
        }))
        setSearchParams({ ...params, ...paramsArg })
    }
    const onChangePagination = (page: string, pageCount: string) => {
        filterHandler({ page, pageCount })
    }
    const onChangeSlider = (min: string, max: string) => {
        filterHandler({ min, max })
    }
    const onClickShowPacksCards = (value: string) => {
        if (value === 'My') {
            filterHandler({ user_id: userId })
        } else {
            filterHandler({ user_id: '' })
        }
    }
    const onChangeText = (value: string) => {
        setSearch(value)
        searchHandler(value)
    }
    const searchHandler = (value: string) => {
        clearTimeout(timoutId)
        const newTimeoutId = setTimeout(() => filterHandler({ packName: value }), 700)
        setTimeoutId(+newTimeoutId)
    }
    const clearFiltersHandler = () => {
        dispatch(packsThunks.getPacks({
            page: '1',
            pageCount: '4',
            min: '0',
            max: '100',
            user_id: '',
            packName: ''
        }))
        setSearchParams({})
        setSearch('')
    }
    const sortHandler = () => {
        filterHandler({
            sortPacks: sort ? '0updated' : '1updated'
        })
    }

    return {
        packs,
        userId,
        search,
        sort,
        setSort,
        searchParams,
        filterHandler,
        sortHandler,
        onChangePagination,
        onChangeSlider,
        onClickShowPacksCards,
        onChangeText,
        clearFiltersHandler
    }
}


import { useAppDispatch, useAppSelector } from 'app/hooks/hooks'
import { useEffect, useState } from 'react'
import { userIdSelector } from 'features/auth/auth.selectors'
import { useSearchParams } from 'react-router-dom'
import { packsAction, packsThunks } from 'features/packs/packs.slice'
import { packsSelector, paramsSelector } from 'features/packs/packs.selectors'

export const useAppFilter = () => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState(true)
    const [onMy, setOnMy] = useState(true)
    const [valueSlider, setValueSlider] = useState<number[]>([0, 100])
    const [timoutId, setTimeoutId] = useState<number | undefined>(undefined)
    const packs = useAppSelector(packsSelector)
    const params = useAppSelector(paramsSelector)
    const userId = useAppSelector(userIdSelector)
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(()=> {
        setSearchParams({ ...params })
    }, [params, setSearchParams])

    const filterHandler = (paramsArg: {}) => {
        dispatch(packsAction.setQueryParams({ params: { ...paramsArg } }))
        dispatch(packsThunks.getPacks())
    }
    const onChangePagination = (page: string, pageCount: string) => {
        filterHandler({ page, pageCount })
    }
    const onChangeSlider = (min: string, max: string) => {
        filterHandler({ min, max })
    }
    const onClickShowPacksCards = () => {
        if (onMy) {
            debugger
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
        filterHandler({
            page: '1',
            pageCount: '4',
            min: '0',
            max: '100',
            user_id: '',
            packName: ''
        })
        setSearch('')
        setValueSlider([0, 100])
        setOnMy(false)
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
        valueSlider,
        setValueSlider,
        setSort,
        searchParams,
        onMy,
        setOnMy,
        filterHandler,
        sortHandler,
        onChangePagination,
        onChangeSlider,
        onClickShowPacksCards,
        onChangeText,
        clearFiltersHandler
    }
}


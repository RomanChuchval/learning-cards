import { useAppDispatch, useAppSelector } from 'app/hooks/hooks'
import { useEffect, useState } from 'react'
import { userIdSelector } from 'features/auth/auth.selectors'
import { useSearchParams } from 'react-router-dom'
import { packsAction, packsThunks } from 'features/packs/packs.slice'
import { packsSelector, paramsSelector } from 'features/packs/packs.selectors'
import { GetPacksParamsType } from 'features/packs/packs.api'

export const usePacksParamsFilter = () => {
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

    useEffect(() => {
        const lastParams: GetPacksParamsType = {}
        if (params.user_id?.length) lastParams.user_id = params.user_id
        if (params.page) +params.page > 1 && (lastParams.page = params.page)
        if (params.pageCount) +params.pageCount > 4 && (lastParams.pageCount = params.pageCount)
        if (params.min) +params.min > 0 && (lastParams.min = params.min)
        if (params.max) +params.max !== 100 && (lastParams.max = params.max)
        if (params.sortPacks) params.sortPacks === '1updated' && (lastParams.sortPacks = params.sortPacks)
        if (params.packName?.length) lastParams.packName = params.packName
        setSearchParams({ ...lastParams })
    }, [setSearchParams, params])
    const onDispatchParams = (paramsArg: GetPacksParamsType) => {
        dispatch(packsAction.setQueryParams({ params: { ...paramsArg } }))
        dispatch(packsThunks.getPacks())
    }
    const onChangePagination = (page: string, pageCount: string) => {
        onDispatchParams({ page, pageCount })
    }
    const onChangeSlider = (min: string, max: string) => {
        onDispatchParams({ min, max })
    }
    const onClickShowPacksCards = () => {
        if (onMy) {
            onDispatchParams({ user_id: userId })
        } else {
            onDispatchParams({ user_id: '' })
        }
    }
    const onChangeText = (value: string) => {
        setSearch(value)
        searchHandler(value)
    }
    const searchHandler = (value: string) => {
        clearTimeout(timoutId)
        const newTimeoutId = setTimeout(() => onDispatchParams({ packName: value }), 700)
        setTimeoutId(+newTimeoutId)
    }
    const clearFiltersHandler = () => {
        onDispatchParams({
            page: '1',
            pageCount: '4',
            min: '0',
            max: '100',
            user_id: '',
            packName: ''
        })
        setSearch('')
        setValueSlider([0, 100])
        setOnMy(true)
    }
    const sortHandler = () => {
        onDispatchParams({
            sortPacks: sort ? '1updated' : '0updated'
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
        filterHandler: onDispatchParams,
        sortHandler,
        onChangePagination,
        onChangeSlider,
        onClickShowPacksCards,
        onChangeText,
        clearFiltersHandler
    }
}


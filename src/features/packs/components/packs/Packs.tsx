import React, { useEffect, useState } from 'react'
import { SuperButton } from 'common'
import Grid from '@mui/material/Grid'
import { PageTitle } from 'common/components/page-title/PageTitle'
import { SearchBar } from 'common/components/search-bar/SearchBar'
import { ShowPacksCards } from 'common/components/show-packs-cards/ShowPacksCards'
import { CardsCountSlider } from 'common/components/number-of-cards-slider/CardsCountSlider'
import { ClearFilter } from 'common/components/clear-filter/ClearFilter'
import { CustomTable } from 'common/components/table/CustomTable'
import { CardsPagination } from 'common/components/pagination/CardsPagination'
import { useAppDispatch, useAppSelector } from 'app/hooks/hooks'
import { packsSelectors } from 'features/packs/packs.selectors'
import TableRow from '@mui/material/TableRow/TableRow'
import TableCell from '@mui/material/TableCell/TableCell'
import { CardsRating } from 'common/components/rating/CardsRating'
import { packsThunks } from 'features/packs/packs.slise'
import { useSearchParams } from 'react-router-dom'
import { userIdSelector } from 'features/auth/auth.selectors'
import { GetPacksParamsType, packsApi } from 'features/packs/packs.api'

export const Packs = () => {
    const packs = useAppSelector(packsSelectors)
    const [timoutId, setTimeoutId] = useState<number | undefined>(undefined)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState(true)
    const dispatch = useAppDispatch()
    const userId = useAppSelector(userIdSelector)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        dispatch(
            packsThunks.getPacks({
                page: params.page,
                pageCount: params.pageCount,
                min: params.min || '',
                max: params.max || '',
                sortPacks: '0updated' || params.sortParams,
                user_id: params.user_id,
                packName: params.packName,
            })
        )
    }, [dispatch, searchParams])

    const params: GetPacksParamsType = {
        page: packs.page + '',
        pageCount: packs.pageCount + '',
        min: packs.minCardsCount + '',
        max: packs.maxCardsCount + '',
        user_id: '',
        packName: '',
        sortPacks: '0updated',
        // block?: string
    }

    const onChangePagination = (page: string, pageCount: string) => {
        dispatch(
            packsThunks.getPacks({
                ...params,
                page,
                pageCount,
            })
        )
        setSearchParams({ ...params, page, pageCount })
    }

    const onChangeSlider = (min: string, max: string) => {
        dispatch(
            packsThunks.getPacks({
                ...params,
                page: '1',
                min,
                max,
            })
        )
        setSearchParams({ ...params, min, max, page: '1' })
    }

    const onClickShowPacksCards = (value: string) => {
        if (value === 'My') {
            dispatch(
                packsThunks.getPacks({
                    ...params,
                    page: '1',
                    user_id: userId,
                })
            )
            setSearchParams({ ...params, user_id: userId + '', page: '1' })
        } else {
            dispatch(
                packsThunks.getPacks({
                    ...params,
                })
            )
            setSearchParams({ ...params })
        }
    }

    const onChangeText = (value: string) => {
        setSearch(value)
        searchHandler(value)
    }
    const searchHandler = (value: string) => {
        clearTimeout(timoutId)
        const newTimeoutId = setTimeout(
            () =>
                dispatch(
                    packsThunks.getPacks({
                        ...params,
                        page: '1',
                        packName: value,
                    })
                ),
            700
        )
        setTimeoutId(+newTimeoutId)
        setSearchParams({ ...params, packName: value, page: '1' })
    }

    const clearFiltersHandler = () => {
        dispatch(
            packsThunks.getPacks({
                page: '1',
                pageCount: '4',
                min: '0',
                max: '100',
                user_id: '',
                packName: '',
            })
        )
        setSearchParams({})
        setSearch('')
    }

    const sortHandler = () => {
        dispatch(
            packsThunks.getPacks({
                ...params,
                sortPacks: sort ? '0updated' : '1updated',
            })
        )
    }
    const tableBodySX = {
        wordWrap: 'break-word',
        minWidth: '200px',
        maxWidth: '300px',
    }

    return (
        <Grid container spacing={2} sx={{ mt: '1px' }} rowSpacing={5} alignItems={'flex-end'}>
            <Grid item md={8}>
                <PageTitle title={'Packs list'} />
            </Grid>
            <Grid item md={4} display={'flex'} justifyContent={'flex-end'}>
                <SuperButton
                    name={'Add new pack'}
                    callback={() => {}}
                    rounded={true}
                    textColor={'white'}
                />
            </Grid>
            <Grid item md={4}>
                <SearchBar fullWidth={true} onChange={onChangeText} value={search} />
            </Grid>
            <Grid item md={3} display={'flex'} justifyContent={'center'}>
                <ShowPacksCards onClick={onClickShowPacksCards} />
            </Grid>
            <Grid item md={4} display={'flex'} justifyContent={'center'}>
                <CardsCountSlider onChange={onChangeSlider} />
            </Grid>
            <Grid item md={1} display={'flex'} justifyContent={'flex-end'}>
                <ClearFilter clearFiltersHandler={clearFiltersHandler} />
            </Grid>
            <Grid item md={12}>
                <CustomTable setSort={setSort} sort={sort} sortHandler={sortHandler}>
                    {packs.cardPacks?.map(textBody => {
                        return (
                            <TableRow key={textBody._id}>
                                <TableCell sx={{ ...tableBodySX, paddingLeft: '40px' }}>
                                    {textBody.name}
                                </TableCell>
                                <TableCell sx={tableBodySX}>{textBody.cardsCount}</TableCell>
                                <TableCell>{textBody.updated}</TableCell>
                                <TableCell sx={{ paddingRight: '54px' }}>
                                    <CardsRating defaultValue={textBody.rating} />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </CustomTable>
            </Grid>
            <Grid item md={12}>
                <CardsPagination
                    page={packs.page}
                    pageCount={packs.pageCount}
                    totalCount={packs.cardPacksTotalCount}
                    onChange={onChangePagination}
                />
            </Grid>
        </Grid>
    )
}

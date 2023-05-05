import React from 'react'
import { useAppFilter } from 'features/packs/hooks/useAppFilter'
import Grid from '@mui/material/Grid'
import { SearchBar } from 'common/components/search-bar/SearchBar'
import { ShowPacksCards } from 'common/components/show-packs-cards/ShowPacksCards'
import { CardsCountSlider } from 'common/components/number-of-cards-slider/CardsCountSlider'
import { ClearFilter } from 'common/components/clear-filter/ClearFilter'
import { CardsPagination } from 'common/components/pagination/CardsPagination'

type PacksFilterPropsType = {
    children: React.ReactNode
}
export const PacksFilter: React.FC<PacksFilterPropsType> = ({ children }) => {
    const {
        packs,
        search,
        onChangePagination,
        onChangeSlider,
        onChangeText,
        clearFiltersHandler,
        onClickShowPacksCards
    } = useAppFilter()

    return (
        <>
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
            {children}
            <Grid item md={12}>
                <CardsPagination
                    page={packs.page}
                    pageCount={packs.pageCount}
                    totalCount={packs.cardPacksTotalCount}
                    onChange={onChangePagination}
                />
            </Grid>
        </>
    )
}
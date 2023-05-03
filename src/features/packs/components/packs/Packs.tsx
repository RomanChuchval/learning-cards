import React from 'react'
import { SuperButton } from 'common'
import Grid from '@mui/material/Grid'
import { PageTitle } from 'common/components/page-title/PageTitle'
import { SearchBar } from 'common/components/search-bar/SearchBar'
import { ShowPacksCards } from 'common/components/show-packs-cards/ShowPacksCards'
import { CardsCountSlider } from 'common/components/number-of-cards-slider/CardsCountSlider'
import { ClearFilter } from 'common/components/clear-filter/ClearFilter'
import { CustomTable } from 'common/components/table/CustomTable'
import { CardsPagination } from 'common/components/pagination/CardsPagination'

export const Packs = () => {
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
                <SearchBar fullWidth={true} />
            </Grid>
            <Grid item md={3} display={'flex'} justifyContent={'center'}>
                <ShowPacksCards />
            </Grid>
            <Grid item md={4} display={'flex'} justifyContent={'center'}>
                <CardsCountSlider />
            </Grid>
            <Grid item md={1} display={'flex'} justifyContent={'flex-end'}>
                <ClearFilter />
            </Grid>
            <Grid item md={12}>
                <CustomTable></CustomTable>
            </Grid>
            <Grid item md={12}>
                <CardsPagination
                    page={1}
                    itemsCountForPage={10}
                    totalCount={10000}
                    onChange={() => {}}
                />
            </Grid>
        </Grid>
    )
}

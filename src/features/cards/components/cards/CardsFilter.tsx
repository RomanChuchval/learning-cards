import React, { FC } from 'react'
import { SearchBar } from 'common/components/search-bar/SearchBar'
import Grid from '@mui/material/Grid'
import { CardsPagination } from 'common/components/pagination/CardsPagination'

type CardsFilterPropsType = {
    children: React.ReactNode
}
export const CardsFilter: FC<CardsFilterPropsType> = ({ children }) => {
    return (
        <>
            <Grid item md={12}>
                <SearchBar onChange={() => {}} value={''} fullWidth={true} />
            </Grid>
            <Grid item md={12}>
                {children}
            </Grid>
            <Grid item md={12}>
                <CardsPagination page={1} pageCount={4} totalCount={10} onChange={() => {}} />
            </Grid>
        </>
    )
}

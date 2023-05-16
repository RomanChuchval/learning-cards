import React, { FC } from 'react'
import { SearchBar } from 'common/components/search-bar/SearchBar'
import Grid from '@mui/material/Grid'
import { CardsPagination } from 'common/components/pagination/CardsPagination'
import { useCards } from 'features/cards/hooks/useCards'

type CardsFilterPropsType = {
    children: React.ReactNode
}
export const CardsFilter: FC<CardsFilterPropsType> = ({ children }) => {
    const { cardsTotalCount, cardsPageCount, cardsPage, onChangePagination } = useCards()
    return (
        <>
            <Grid item md={12}>
                <SearchBar onChange={() => {}} value={''} fullWidth={true} />
            </Grid>
            <Grid item md={12}>
                {children}
            </Grid>
            <Grid item md={12}>
                <CardsPagination
                    page={cardsPage}
                    pageCount={cardsPageCount}
                    totalCount={cardsTotalCount}
                    onChange={onChangePagination}
                />
            </Grid>
        </>
    )
}

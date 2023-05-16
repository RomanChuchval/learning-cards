import React from 'react'
import { useLocation } from 'react-router-dom'
import { BackTo, paths } from 'common'
import Grid from '@mui/material/Grid'
import { CardsHeader } from 'features/cards/components/cards/CardsHeader'
import { CardsFilter } from 'features/cards/components/cards/CardsFilter'
import { CardsTable } from 'features/cards/components/cards/CardsTable'
import { useCards } from 'features/cards/hooks/useCards'

export const Cards = () => {
    // const location = useLocation()
    // const packId = location.state
    return (
        <>
            <BackTo link={paths.PACKS} text={'Back to Packs List'} />
            <Grid container spacing={2} sx={{ mt: '1px' }} rowSpacing={5}>
                <CardsHeader />
                <CardsFilter>
                    <CardsTable />
                </CardsFilter>
            </Grid>
        </>
    )
}

import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { useAppFilter } from 'features/packs/hooks/useAppFilter'
import { PacksHeader } from 'features/packs/components/packs-header/PacksHeader'
import { PacksFilter } from 'features/packs/components/packs-filter/PacksFilter'
import { PacksTable } from 'features/packs/components/packs-table/PacksTable'

export const Packs = () => {
    const { searchParams, filterHandler} = useAppFilter()
    const paramsSearch = Object.fromEntries(searchParams)

    useEffect(() => {
        filterHandler(paramsSearch)
    }, [])

    return (
        <Grid container spacing={2} sx={{ mt: '1px' }} rowSpacing={5} alignItems={'flex-end'}>
            <PacksHeader />
            <PacksFilter>
                <PacksTable/>
            </PacksFilter>
        </Grid>
    )
}
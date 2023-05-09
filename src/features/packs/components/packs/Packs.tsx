import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { usePacksParamsFilter } from 'features/packs/hooks/usePacksParamsFilter'
import { PacksHeader } from 'features/packs/components/packs-header/PacksHeader'
import { PacksFilter } from 'features/packs/components/packs-filter/PacksFilter'
import { PacksTable } from 'features/packs/components/packs-table/PacksTable'
import { packsAction, packsThunks } from 'features/packs/packs.slice'
import { useAppDispatch } from 'app/hooks/useAppDispatch'

export const Packs = () => {
    const { searchParams } = usePacksParamsFilter()
    const dispatch = useAppDispatch()
    const paramsSearch = Object.fromEntries(searchParams)
    useEffect(() => {
        dispatch(packsAction.setQueryParams({ params: { ...paramsSearch } }))
        dispatch(packsThunks.getPacks())
    }, [dispatch])

    return (
        <Grid container spacing={2} sx={{ mt: '1px' }} rowSpacing={5} alignItems={'flex-end'}>
            <PacksHeader />
            <PacksFilter>
                <PacksTable />
            </PacksFilter>
        </Grid>
    )
}

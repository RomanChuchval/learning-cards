import React from 'react'
import Grid from '@mui/material/Grid'
import { PageTitle } from 'common/components/page-title/PageTitle'
import { CreatePack } from 'features/packs/components/pack-actions/CreatePack'

export const PacksHeader = () => {

    return (
        <>
            <Grid item md={8}>
                <PageTitle title={'Packs list'} />
            </Grid>
            <Grid item md={4} display={'flex'} justifyContent={'flex-end'}>
               <CreatePack/>
            </Grid>
        </>
    )
}


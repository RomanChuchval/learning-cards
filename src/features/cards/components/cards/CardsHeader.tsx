import React from 'react'
import Grid from '@mui/material/Grid'
import { PageTitle } from 'common/components/page-title/PageTitle'
import { SuperButton } from 'common'

export const CardsHeader = () => {
    return (
        <>
            <Grid item md={6}>
                <PageTitle title={'Friends Packs'} />
            </Grid>
            <Grid item md={6} display={'flex'} justifyContent={'flex-end'}>
                <SuperButton
                    name={'Add new card'}
                    callback={() => {}}
                    rounded={true}
                    textColor={'white'}
                />
            </Grid>
        </>
    )
}

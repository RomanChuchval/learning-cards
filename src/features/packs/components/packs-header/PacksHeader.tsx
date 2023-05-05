import Grid from '@mui/material/Grid'
import { PageTitle } from 'common/components/page-title/PageTitle'
import { SuperButton } from 'common'
import React from 'react'

export const PacksHeader = () => {
    return (
        <>
            <Grid item md={8}>
                <PageTitle title={'Packs list'} />
            </Grid>
            <Grid item md={4} display={'flex'} justifyContent={'flex-end'}>
                <SuperButton
                    name={'Add new pack'}
                    callback={() => {
                    }}
                    rounded={true}
                    textColor={'white'}
                />
            </Grid>
        </>
    )
}
import React from 'react'
import notFound from 'assets/img/400.svg'
import { SuperButton } from 'common/components/button/SuperButton'
import { useNavigate } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { paths } from 'common'

export const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <Grid
            container
            height={'100vh'}
            spacing={5}
            margin={'0 auto'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Grid item>
                    <Box component={'span'} sx={{ fontSize: '50px', fontWeight: '600' }}>
                        Oops!
                    </Box>
                </Grid>
                <Grid item>
                    <Typography>Sorry! Page not Found!</Typography>
                </Grid>
                <Grid item>
                    <SuperButton
                        callback={() => {
                            navigate(paths.PACKS)
                        }}
                        name={'Back to home page!'}
                        textColor={'white'}
                        color={'primary'}
                        rounded={true}
                    />
                </Grid>
            </Grid>
            <Grid item>
                <img src={notFound} alt='Page not found' />
            </Grid>
        </Grid>
    )
}

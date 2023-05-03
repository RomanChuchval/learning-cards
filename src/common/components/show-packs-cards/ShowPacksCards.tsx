import React from 'react'
import Button from '@mui/material/Button'
import { ButtonGroup, Typography } from '@mui/material'
import Box from '@mui/material/Box'

export const ShowPacksCards = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography sx={{ fontWeight: '500', fontSize: '16px', mb: '8px' }}>
                Show packs cards
            </Typography>
            <ButtonGroup variant='outlined'>
                <Button>My</Button>
                <Button>All</Button>
            </ButtonGroup>
        </Box>
    )
}

import React, { MouseEventHandler, useState } from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

type ShowPacksCardsPropsType = {
    onClick: (value: string) => void
}

export const ShowPacksCards: React.FC<ShowPacksCardsPropsType> = ({onClick}) => {

    const [state, setState] = useState('All')

    const onClickMy = () => {
        onClick('My')
        setState('My')
    }
    const onClickAll = () => {
        onClick('All')
        setState('All')

    }

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
                <Button onClick={onClickMy} disabled={state === 'My'}>My</Button>
                <Button onClick={onClickAll} disabled={state === 'All'}>All</Button>
            </ButtonGroup>
        </Box>
    )
}

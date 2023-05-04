import React from 'react'
import Box from '@mui/material/Box'
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff'
import IconButton from '@mui/material/IconButton'

type ClearFilterPropsType = {
    clearFiltersHandler: () => void
}
export const ClearFilter: React.FC<ClearFilterPropsType> = ({ clearFiltersHandler }) => {
    const boxSx = {
        width: '36px',
        height: '36px',
        border: '1px solid rgba(000, 000, 000, 0.3)',
        borderRadius: '3px',
        padding: '3px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            bgcolor: 'rgba(000, 000, 000, 0.13)'
        },
        overflow: 'hidden'
    }

    const onClickHandler = () => {
        clearFiltersHandler()
    }

    return (
        <Box sx={boxSx}>
            <IconButton onMouseEnter={onClickHandler} sx={{ width: '50px' }} onClick={() => console.log('1')}>
                <FilterAltOffIcon />
            </IconButton>
        </Box>
    )
}

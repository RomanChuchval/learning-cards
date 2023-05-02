import React, { FC } from 'react'
import Box from '@mui/material/Box'

type InfoMessageType = {
    text: string
    margin?: string
}

export const InfoMessage: FC<InfoMessageType> = ({ text, margin }) => {
    return (
        <Box
            component={'span'}
            sx={{
                textAlign: 'center',
                lineHeight: '24px',
                marginTop: margin ? margin : '20px',
                opacity: '0.6',
            }}
        >
            {text}
        </Box>
    )
}

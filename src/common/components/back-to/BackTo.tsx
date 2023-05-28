import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { AppLink } from 'common/components/link/AppLink'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Box from '@mui/material/Box'

type BackToPropsType = {
    text: string
    link: string
}

export const BackTo: FC<BackToPropsType> = memo(({ text, link }) => {
    return (
        <AppLink justifyContent={'flex-start'} colorText={'#000'}>
            <Link to={link}>
                <Box
                    component={'span'}
                    sx={{
                        display: 'flex',
                        gap: '10px',
                        minWidth: '200px',
                        mt: '25px',
                    }}
                >
                    <KeyboardBackspaceIcon />
                    {text}
                </Box>
            </Link>
        </AppLink>
    )
})

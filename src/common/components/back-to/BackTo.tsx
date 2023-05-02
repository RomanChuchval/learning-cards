import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { AppLink } from 'common/components/link/AppLink'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Box from '@mui/material/Box'

type BackToPropsType = {
    text: string
    link: string
}

export const BackTo: FC<BackToPropsType> = ({ text, link }) => {
    return (
        <AppLink justifyContent={'flex-start'} colorText={'#000'}>
            <Link to={link}>
                <Box
                    component={'span'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        minWidth: '200px',
                        mt: '25px',
                        pl: '25px',
                    }}
                >
                    <KeyboardBackspaceIcon />
                    {text}
                </Box>
            </Link>
        </AppLink>
    )
}

import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

type EmailInputType = {
    label: string
}

export const EmailInput: FC<EmailInputType> = ({ label }) => {
    return (
        <Box sx={{ marginTop: '30px' }}>
            <TextField
                label={label}
                type={'text'}
                name={'email'}
                variant='standard'
                fullWidth={true}
            />
        </Box>
    )
}

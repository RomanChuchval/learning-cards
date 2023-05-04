import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FormInputValues } from 'features/auth/hooks/useAppForm'

type EmailInputType = {
    label: string
    register: UseFormRegister<FormInputValues>
    errors: FieldErrors<FormInputValues>
    name: 'email' | 'loginEmail'
}

export const EmailInput: FC<EmailInputType> = ({ label, register, errors, name }) => {
    return (
        <Box sx={{ marginTop: '30px' }}>
            <TextField
                {...register(name)}
                error={!!errors[name]}
                label={label}
                type={'text'}
                helperText={`${errors[name] ? errors[name]?.message : ''}`}
                variant='standard'
                fullWidth={true}
            />
        </Box>
    )
}

import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import { Eye } from 'common'
import Box from '@mui/material/Box'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FormInputValues } from 'features/auth/hooks/useAppForm'

type PasswordInputType = {
    label: string
    register: UseFormRegister<FormInputValues>
    errors: FieldErrors<FormInputValues>
    name: 'password' | 'loginPassword' | 'confirmPassword'
}

export const PasswordInput: FC<PasswordInputType> = ({ label, register, errors, name }) => {
    return (
        <Box sx={{ mt: '30px', position: 'relative' }}>
            <TextField
                {...register(name)}
                error={!!errors[name]}
                helperText={`${errors[name] ? errors[name]?.message : ''}`}
                label={label}
                type={'password'}
                variant='standard'
                fullWidth={true}
            />
            <Box sx={{ position: 'absolute', right: '0', top: '10px' }}>
                <Eye />
            </Box>
        </Box>
    )
}

import FormGroup from '@mui/material/FormGroup/FormGroup'
import TextField from '@mui/material/TextField/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import { SuperButton } from 'common'
import * as React from 'react'
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { FormInputValues } from 'features/auth/hooks/useAppForm'

type FormModalsPropsType = {
    handleClose: () => void
    error: string | undefined
    register: UseFormRegister<FormInputValues>
    packHandler: (data: FormInputValues) => void
    handleSubmit: UseFormHandleSubmit<FormInputValues>
}

export const FormModals: React.FC<FormModalsPropsType> =
    ({ handleClose, handleSubmit, register, packHandler, error }) => {
        return (
            <form onSubmit={handleSubmit(packHandler)}>
                <FormGroup sx={{ p: '30px 40px' }}>
                    <TextField variant='standard'
                               label='Name Pack'
                               margin='normal'
                               error={!!error}
                               helperText={`${error ? error : ''}`}
                               {...register('textInput')} />
                    <FormControlLabel sx={{ p: '30px 0' }}
                                      label={'Private pack'}
                                      control={<Checkbox value={true} {...register('private')} />} />
                    <Box display={'flex'} justifyContent='space-between'>
                        <SuperButton name={'Cancel'}
                                     color={'secondary'}
                                     rounded={true}
                                     width={'130'}
                                     type={'button'}
                                     callback={handleClose} />
                        <SuperButton name={'Save'} rounded={true} width={'130'} />
                    </Box>
                </FormGroup>
            </form>
        )
    }
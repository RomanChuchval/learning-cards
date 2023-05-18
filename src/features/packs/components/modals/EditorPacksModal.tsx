import * as React from 'react'
import TextField from '@mui/material/TextField/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FormInputValues } from 'features/auth/hooks/useAppForm'
import { FieldErrors } from 'react-hook-form'

type EditorPacksModalPropsType = {
    packName: string
    errors: FieldErrors<FormInputValues>
    register: UseFormRegister<FormInputValues>
}
export const EditorPacksModal: React.FC<EditorPacksModalPropsType> = ({ register, errors, packName }) => {
    return (
        <>
            <TextField defaultValue={packName}
                variant='standard'
                label='Name Pack'
                margin='normal'
                error={!!errors.textInput}
                helperText={`${errors.textInput ? errors.textInput.message : ''}`}
                {...register('textInput')}
            />
            <FormControlLabel
                sx={{ p: '30px 0' }}
                label={'Private pack'}
                control={<Checkbox value={true} {...register('private')} />}
            />
        </>
    )
}

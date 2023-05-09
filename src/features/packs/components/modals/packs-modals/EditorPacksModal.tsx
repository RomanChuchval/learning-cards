import * as React from 'react'
import TextField from '@mui/material/TextField/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FormInputValues } from 'features/auth/hooks/useAppForm'

type EditorPacksModalPropsType = {
    error: string | undefined
    register: UseFormRegister<FormInputValues>
}
export const EditorPacksModal: React.FC<EditorPacksModalPropsType> =
    ({ register, error }) => {
        return (
            <>
                <TextField variant='standard'
                           label='Name Pack'
                           margin='normal'
                           error={!!error}
                           helperText={`${error ? error : ''}`}
                           {...register('textInput')} />
                <FormControlLabel sx={{ p: '30px 0' }}
                                  label={'Private pack'}
                                  control={<Checkbox value={true} {...register('private')} />} />
            </>
        )
    }
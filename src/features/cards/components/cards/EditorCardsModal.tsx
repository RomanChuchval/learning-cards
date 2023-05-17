import React from 'react'
import TextField from '@mui/material/TextField/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FormInputValues } from 'features/auth/hooks/useAppForm'
import { InputLabel, OutlinedInput } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

type EditorCardsModalPropsType = {
    register: UseFormRegister<FormInputValues>
}
export const EditorCardsModal: React.FC<EditorCardsModalPropsType> = ({ register }) => {
    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <Typography component={'span'} sx={{ opacity: '0.5' }}>
                Chose a question format
            </Typography>
            <Select sx={{ height: '36px' }} defaultValue={'text'}>
                <MenuItem value={'text'} sx={{ width: '300px' }}>
                    Text
                </MenuItem>
                <Divider />
                <MenuItem value={'image'} sx={{ width: '300px' }}>
                    Image
                </MenuItem>
            </Select>
            <TextField
                variant='standard'
                label='Question'
                margin='normal'
                {...register('questionInput')}
            />
            <TextField
                sx={{ m: '40px 0' }}
                variant='standard'
                label='Answer'
                margin='normal'
                {...register('answerInput')}
            />
        </FormControl>
    )
}

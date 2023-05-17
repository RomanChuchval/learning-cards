import React from 'react'
import TextField from '@mui/material/TextField/TextField'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FormInputValues } from 'features/auth/hooks/useAppForm'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

type EditorCardsModalPropsType = {
    register: UseFormRegister<FormInputValues>
    question?: string
    answer?: string
}
export const EditorCardsModal: React.FC<EditorCardsModalPropsType> = ({
    register,
    question,
    answer,
}) => {
    return (
        <>
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
                defaultValue={question}
                {...register('question')}
                variant='standard'
                label='Question'
                margin='normal'
            />
            <TextField
                defaultValue={answer}
                {...register('answer')}
                sx={{ m: '40px 0' }}
                variant='standard'
                label='Answer'
                margin='normal'
            />
        </>
    )
}

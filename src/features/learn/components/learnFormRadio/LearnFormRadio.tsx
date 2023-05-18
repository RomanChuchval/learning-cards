import FormControl from '@mui/material/FormControl/FormControl'
import Typography from '@mui/material/Typography'
import FormLabel from '@mui/material/FormLabel/FormLabel'
import RadioGroup from '@mui/material/RadioGroup/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel'
import Radio from '@mui/material/Radio'
import { SuperButton } from 'common'
import React from 'react'
import { FormInputValues, useAppForm } from 'features/auth/hooks/useAppForm'

export const LearnFormRadio = () => {

    const {handleSubmit, register} = useAppForm([])

    const onSubmit = (data: FormInputValues) => {
        console.log(data.radio)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <Typography variant='subtitle1' component='div' sx={{ marginBottom: '20px' }}>
                    <b>Answer:</b> This is how "This" works in JavaScript
                </Typography>
                <FormLabel>Rate yourself:</FormLabel>
                <RadioGroup defaultValue='1' name='radio-buttons-group' sx={{ marginBottom: '20px' }}>
                    <FormControlLabel value='1' control={<Radio {...register('radio')}/>} label='Did not know' />
                    <FormControlLabel value='2' control={<Radio {...register('radio')}/>} label='Forgot' />
                    <FormControlLabel value='3' control={<Radio {...register('radio')}/>} label='A lot of thought' />
                    <FormControlLabel value='4' control={<Radio {...register('radio')}/>} label='Сonfused' />
                    <FormControlLabel value='5' control={<Radio {...register('radio')}/>} label='Knew the answer' />
                </RadioGroup>
                <SuperButton name={'Next'} rounded={true} textColor={'white'} />
            </FormControl>
        </form>

    )
}
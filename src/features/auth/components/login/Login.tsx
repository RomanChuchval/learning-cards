import React, { FC } from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import { AppLink, EmailInput, Form, PasswordInput, paths } from 'common'
import { useAuth } from 'features/auth/hooks/useAuth'
import { useAppForm } from 'features/auth/hooks/useAppForm'

export type LoginFieldsType = {
    loginEmail: string
    loginPassword: string
    rememberMe: boolean
}
export const Login: FC<any> = () => {
    const { errors, handleSubmit, register } = useAppForm(['loginEmail', 'loginPassword'])
    const { login } = useAuth()
    const onSubmit = (data: LoginFieldsType) => {
        login(data)
    }

    return (
        <Box>
            <Form
                link={{ to: paths.REGISTER, text: 'Sign Up' }}
                description={"Don't have an account?"}
                title={'Sign In'}
                btnName={'Sign In'}
                onSubmit={handleSubmit(onSubmit)}
            >
                <EmailInput
                    label={'Email'}
                    name={'loginEmail'}
                    register={register}
                    errors={errors}
                />
                <PasswordInput
                    label={'Password'}
                    name={'loginPassword'}
                    register={register}
                    errors={errors}
                />
                <FormControlLabel
                    sx={{ alignSelf: 'self-start', marginTop: '20px' }}
                    control={<Checkbox {...register('rememberMe')} />}
                    label='Remember me'
                />
                <AppLink justifyContent={'flex-end'} colorText={'black'} fontWeight={500}>
                    <Link to={paths.FORGOT_PASSWORD}>Forgot Password?</Link>
                </AppLink>
            </Form>
        </Box>
    )
}

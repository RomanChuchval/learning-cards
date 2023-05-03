import React, { FC } from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import { AppLink, EmailInput, Form, PasswordInput, paths } from 'common'
import { useAppDispatch } from 'app/hooks'
import { authThunks } from 'features/auth/auth.slice'

export const Login: FC<any> = () => {
    const dispatch = useAppDispatch()
    const handleLogin = () => {
        const payload = {
            email: 'rchuchvaldev@gmail.com',
            password: 'qwerqwer',
            rememberMe: true,
        }
        dispatch(authThunks.login(payload))
    }

    return (
        <Box>
            <Form
                link={{ to: paths.REGISTER, text: 'Sign Up' }}
                description={"Don't have an account?"}
                title={'Sign In'}
                btnName={'Sign In'}
                onClick={handleLogin}
            >
                <EmailInput label={'Email'} />
                <PasswordInput label={'Password'} />
                <FormControlLabel
                    sx={{ alignSelf: 'self-start', marginTop: '20px' }}
                    control={<Checkbox />}
                    label='Remember me'
                />
                <AppLink justifyContent={'flex-end'} colorText={'black'} fontWeight={500}>
                    <Link to={paths.FORGOT_PASSWORD}>Forgot Password?</Link>
                </AppLink>
            </Form>
        </Box>
    )
}

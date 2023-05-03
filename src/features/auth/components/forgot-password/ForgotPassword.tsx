import React from 'react'
import Box from '@mui/material/Box'
import { EmailInput, Form, InfoMessage, paths } from 'common'
import { useAuth } from 'features/auth/useAuth'
import { Navigate } from 'react-router-dom'

export const ForgotPassword = () => {
    const { profile } = useAuth()

    if (profile) return <Navigate to={paths.PACKS} />
    return (
        <Box>
            <Form
                link={{ to: paths.LOGIN, text: 'Try logging in' }}
                description={'Did you remember your password?'}
                title={'Forgot your password?'}
                btnName={'Send Instructions'}
                onClick={() => {}}
            >
                <EmailInput label={'Email'} />
                <InfoMessage
                    text={'Enter your email address and we will send you further instructions'}
                />
            </Form>
        </Box>
    )
}

import React from 'react'
import Box from '@mui/material/Box'
import { EmailInput, Form, InfoMessage } from 'common'

export const ForgotPassword = () => {
    return (
        <Box>
            <Form
                link={{ to: '/', text: 'Try logging in' }}
                description={'Did you remember your password?'}
                title={'Forgot your password?'}
                btnName={'Send Instructions'}
            >
                <EmailInput label={'Email'} />
                <InfoMessage
                    text={'Enter your email address and we will send you further instructions'}
                />
            </Form>
        </Box>
    )
}

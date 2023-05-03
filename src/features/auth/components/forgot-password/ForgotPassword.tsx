import React from 'react'
import Box from '@mui/material/Box'
import { EmailInput, Form, InfoMessage, paths } from 'common'

export const ForgotPassword = () => {
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

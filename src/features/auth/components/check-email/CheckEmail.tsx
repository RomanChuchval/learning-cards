import React from 'react'
import email from 'assets/img/email.svg'
import Box from '@mui/material/Box'
import { Form, InfoMessage, paths } from 'common'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from 'features/auth/useAuth'

export const CheckEmail = () => {
    const navigate = useNavigate()
    const { profile } = useAuth()

    if (profile) return <Navigate to={paths.PACKS} />
    return (
        <Box>
            <Form
                title={'Check Email'}
                btnName={'Back to login'}
                onClick={() => navigate(paths.LOGIN)}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Box
                        component={'img'}
                        sx={{
                            width: '150px',
                            mb: '20px',
                            mt: '20px',
                        }}
                        src={email}
                        alt='check-email'
                    />
                    <InfoMessage
                        text={'We’ve sent an Email with instructions to example@mail.com'}
                    />
                </Box>
            </Form>
        </Box>
    )
}

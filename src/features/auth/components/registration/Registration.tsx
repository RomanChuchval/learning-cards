import React from 'react'
import { EmailInput, Form, PasswordInput, paths } from 'common'
import { useAppDispatch } from 'app/hooks/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { useAuth } from 'features/auth/useAuth'
import { Navigate } from 'react-router-dom'

export const Registration = () => {
    const dispatch = useAppDispatch()
    const { profile } = useAuth()

    if (profile) return <Navigate to={paths.PACKS} />
    // const registerHandler = () => {
    //     const payload = {
    //         email: 'rchuchvaldev@gmail.com',
    //         password: 'qwerqwerqaz',
    //     }
    //     dispatch(authThunks.register(payload))
    // }

    return (
        <div>
            <Form
                link={{ to: paths.LOGIN, text: 'Sign In' }}
                description={'Already have an account?'}
                title={'Sign Up'}
                btnName={'Sign Up'}
                onClick={() => {}}
            >
                <EmailInput label={'Email'} />
                <PasswordInput label={'Password'} />
                <PasswordInput label={'Confirm password'} />
            </Form>
        </div>
    )
}

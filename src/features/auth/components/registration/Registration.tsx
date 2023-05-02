import React from 'react'
import { EmailInput, Form, PasswordInput } from 'common'
import { useAppDispatch } from 'app/hooks'
import { authThunks } from 'features/auth/auth.slice'

export const Registration = () => {
    const dispatch = useAppDispatch()
    const registerHandler = () => {
        const payload = {
            email: 'rchuchvaldev@gmail.com',
            password: 'qwerqwerqaz',
        }
        dispatch(authThunks.register(payload))
    }

    return (
        <div>
            <Form
                link={{ to: '/', text: 'Sign In' }}
                description={'Already have an account?'}
                title={'Sign Up'}
                btnName={'Sign Up'}
            >
                <EmailInput label={'Email'} />
                <PasswordInput label={'Password'} />
                <PasswordInput label={'Confirm password'} />
            </Form>
            <button onClick={registerHandler}>reg</button>
        </div>
    )
}

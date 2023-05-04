import React from 'react'
import { EmailInput, Form, PasswordInput, paths } from 'common'

export const Registration = () => {
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

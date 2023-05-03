import React from 'react'
import { Form, InfoMessage, PasswordInput, paths } from 'common'
import { useAuth } from 'features/auth/useAuth'
import { Navigate } from 'react-router-dom'

export const NewPassword = () => {
    const { profile } = useAuth()

    if (profile) return <Navigate to={paths.PACKS} />
    return (
        <div>
            <Form title={'Create new password'} btnName={'Create new password'} onClick={() => {}}>
                <PasswordInput label={'New password'} />
                <InfoMessage
                    text={'Create new password and we will send you further instructions to email'}
                />
            </Form>
        </div>
    )
}

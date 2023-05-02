import React from 'react'
import { Form, InfoMessage, PasswordInput } from 'common'

export const NewPassword = () => {
    return (
        <div>
            <Form title={'Create new password'} btnName={'Create new password'}>
                <PasswordInput label={'New password'} />
                <InfoMessage
                    text={'Create new password and we will send you further instructions to email'}
                />
            </Form>
        </div>
    )
}

import { createHashRouter } from 'react-router-dom'
import React from 'react'
import { App } from 'app/App'
import { PageNotFound } from 'common/components/page-not-found/PageNotFound'
import { paths } from 'common'
import { Cards } from 'features/cards/components/cards/Cards'
import { Packs } from 'features/packs/components/packs/Packs'
import { Profile } from 'features/auth/components/profile/Profile'
import { Learn } from 'features/cards/components/learn/Learn'
import { CheckEmail } from 'features/auth/components/check-email/CheckEmail'
import { ForgotPassword } from 'features/auth/components/forgot-password/ForgotPassword'
import { Login } from 'features/auth/components/login/Login'
import { Registration } from 'features/auth/components/registration/Registration'
import { NewPassword } from 'features/auth/components/new-password/NewPassword'
import { Sandbox } from 'common/components/_test-component/Sandbox'

export const router = createHashRouter([
    {
        path: paths.MAIN,
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: paths.CARDS,
                element: <Cards />,
            },
            {
                path: paths.PACKS,
                element: <Packs />,
            },
            {
                path: paths.PROFILE,
                index: true,
                element: <Profile />,
            },
            {
                path: paths.LEARN,
                element: <Learn />,
            },
            {
                path: paths.CHECK_EMAIL,
                element: <CheckEmail />,
            },
            {
                path: paths.FORGOT_PASSWORD,
                element: <ForgotPassword />,
            },
            {
                path: paths.LOGIN,
                element: <Login />,
            },
            {
                path: paths.REGISTER,
                element: <Registration />,
            },
            {
                path: paths.SET_NEW_PASSWORD,
                element: <NewPassword />,
            },
            {
                path: paths.SANDBOX,
                element: <Sandbox />,
            },
        ],
    },
])

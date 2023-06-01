import React from 'react'
import { AppHeader, AppNotify } from 'common'
import { Main } from 'app/components/Main'

export const App = () => {
    return (
        <>
            <AppHeader />
            <Main />
            <AppNotify />
        </>
    )
}


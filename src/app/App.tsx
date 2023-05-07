import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from 'common/components/app-header/AppHeader'
import Container from '@mui/material/Container'
import { authThunks } from 'features/auth/auth.slice'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { AppNotify } from 'common/components/app-notify/AppNotify'
import { useAppNotify } from 'app/hooks/useAppNotify'

export const App = () => {
    const dispatch = useAppDispatch()
    useAppNotify()

    useEffect(() => {
        dispatch(authThunks.authMe())
    }, [dispatch])

    return (
        <>
            <AppHeader />
            <Container fixed>
                <Outlet />
            </Container>
            <AppNotify />
        </>
    )
}

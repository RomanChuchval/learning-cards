import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from 'common/components/app-header/AppHeader'
import Container from '@mui/material/Container'
import { authThunks } from 'features/auth/auth.slice'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { AppNotify } from 'common/components/app-notify/AppNotify'
import { useAppNotify } from 'app/hooks/useAppNotify'
import { AppPreloader } from 'common/components/preloader/AppPreloader'
import LinearProgress from '@mui/material/LinearProgress/LinearProgress'
import { useApp } from 'app/hooks/useApp'

export const App = () => {
    const dispatch = useAppDispatch()
    const {isInitialize, isLoading} = useApp()
    useAppNotify()

    useEffect(() => {
        dispatch(authThunks.authMe())
    }, [dispatch])

    return (
        <>
            <AppHeader />
            {isLoading && <LinearProgress />}
            <Container fixed>{isInitialize ? <AppPreloader /> : <Outlet />}</Container>
            <AppNotify />
        </>
    )
}

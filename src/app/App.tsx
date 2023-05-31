import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import { authThunks } from 'features/auth/auth.slice'
import LinearProgress from '@mui/material/LinearProgress'
import { AppHeader, AppNotify, AppPreloader } from 'common'
import { useAppState, useAppDispatch, useAppNotify } from 'app'

export const App = () => {
    const dispatch = useAppDispatch()
    const { isInitialize, isLoadingApp } = useAppState()
    useAppNotify()

    useEffect(() => {
        dispatch(authThunks.authMe())
    }, [dispatch])

    return (
        <>
            <AppHeader />
            {isLoadingApp && <LinearProgress />}
            <Container fixed>{isInitialize ? <AppPreloader /> : <Outlet />}</Container>
            <AppNotify />
        </>
    )
}

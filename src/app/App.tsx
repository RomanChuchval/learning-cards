import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import { authThunks } from 'features/auth/auth.slice'
import LinearProgress from '@mui/material/LinearProgress/LinearProgress'
import { AppHeader, AppNotify, AppPreloader } from 'common'
import { useApp, useAppDispatch, useAppNotify } from './hooks'

export const App = () => {
    const dispatch = useAppDispatch()
    const { isInitialize, isLoadingApp } = useApp()
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

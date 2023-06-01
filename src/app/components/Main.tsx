import { useAppDispatch, useAppState } from 'app/hooks'
import React, { useEffect } from 'react'
import { authThunks } from 'features/auth/auth.slice'
import LinearProgress from '@mui/material/LinearProgress'
import Container from '@mui/material/Container'
import { AppPreloader } from 'common'
import { Outlet } from 'react-router-dom'

export const Main = () => {
    const dispatch = useAppDispatch()
    const { isInitialize, isLoadingApp } = useAppState()

    useEffect(() => {
        dispatch(authThunks.authMe())
    }, [dispatch])

    return (
        <>
            {isLoadingApp && <LinearProgress />}
            <Container fixed>{isInitialize ? <AppPreloader /> : <Outlet />}</Container>
        </>
    )
}
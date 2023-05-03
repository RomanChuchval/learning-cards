import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from 'common/components/app-header/AppHeader'
import Container from '@mui/material/Container'
import { useAppDispatch } from 'app/hooks/hooks'
import { authThunks } from 'features/auth/auth.slice'

export const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authThunks.authMe())
    }, [dispatch])

    return (
        <>
            <AppHeader />
            <Container fixed>
                <Outlet />
            </Container>
        </>
    )
}

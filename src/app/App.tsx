import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from 'common/components/app-header/AppHeader'
import Container from '@mui/material/Container'
import { useAppDispatch } from 'app/hooks'

export const App = () => {
    const dispatch = useAppDispatch()

    return (
        <>
            <AppHeader />
            <Container fixed>
                <Outlet />
            </Container>
        </>
    )
}

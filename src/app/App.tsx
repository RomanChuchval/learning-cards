import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from 'common/components/app-header/AppHeader'
import Container from '@mui/material/Container'
import { authThunks } from 'features/auth/auth.slice'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { AppNotify } from 'common/components/app-notify/AppNotify'
import { useAppNotify } from 'app/hooks/useAppNotify'
import { AppPreloader } from 'common/components/preloader/AppPreloader'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { isInitializeSelector } from 'app/app.selectors'

export const App = () => {
    const dispatch = useAppDispatch()
    const initialize = useAppSelector(isInitializeSelector)
    useAppNotify()

    useEffect(() => {
        dispatch(authThunks.authMe())
    }, [dispatch])

    return (
        <>
            <AppHeader />
            <Container fixed>{initialize ? <AppPreloader /> : <Outlet />}</Container>
            <AppNotify />
        </>
    )
}

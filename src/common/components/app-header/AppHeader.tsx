import React from 'react'
import logo from 'assets/img/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar/AppBar'
import Toolbar from '@mui/material/Toolbar/Toolbar'
import { Container } from '@mui/material'
import { paths, SuperButton } from 'common'
import { HeaderProfile } from 'common/components/header-profile/HeaderProfile'

export const AppHeader = () => {
    return (
        <AppBar color={'inherit'} position={'static'}>
            <Container fixed>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={logo} alt='app-logo' />
                    <NavLink to={paths.LOGIN}>log</NavLink>
                    <Link to={paths.REGISTER}>reg</Link>
                    <Link to={paths.CHECK_EMAIL}>check</Link>
                    <Link to={paths.SET_NEW_PASSWORD}>new</Link>
                    <Link to={paths.FORGOT_PASSWORD}>forgot</Link>
                    <Link to={paths.PAGE_NOT_FOUND}>404</Link>
                    <Link to={paths.PROFILE}>Profile</Link>
                    <Link to={paths.PACKS}>Packs</Link>
                    <Link to={paths.SANDBOX}>test</Link>
                    <HeaderProfile userName={'userName'} />
                    <SuperButton
                        callback={() => {}}
                        width={'113'}
                        rounded={true}
                        color={'primary'}
                        textColor={'white'}
                        name={'Sign In'}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

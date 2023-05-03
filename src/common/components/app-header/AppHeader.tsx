import React from 'react'
import logo from 'assets/img/logo.svg'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar/AppBar'
import Toolbar from '@mui/material/Toolbar/Toolbar'
import { Container } from '@mui/material'
import { paths, SuperButton } from 'common'
import { HeaderProfile } from 'common/components/header-profile/HeaderProfile'

export const AppHeader = () => {
    return (
        <AppBar color={'inherit'} position={'static'}>
            <Container fixed>
                <Toolbar
                    disableGutters
                    sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
                >
                    <Link to={paths.PACKS}>
                        <img src={logo} alt='app-logo' />
                    </Link>
                    <Link to={paths.LOGIN}>log</Link>
                    <Link to={paths.REGISTER}>reg</Link>
                    <Link to={paths.CHECK_EMAIL}>check</Link>
                    <Link to={paths.SET_NEW_PASSWORD}>new</Link>
                    <Link to={paths.FORGOT_PASSWORD}>forgot</Link>
                    <Link to={paths.PAGE_NOT_FOUND}>404</Link>
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

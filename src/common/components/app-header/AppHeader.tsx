import React from 'react';
import logo from 'assets/img/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import { Container } from '@mui/material';
import { paths, SuperButton } from 'common';

export const AppHeader = () => {
    return (
        <AppBar color={'inherit'} position={'static'}>
            <Container fixed>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={logo} alt='app-logo' />
                    <NavLink to={paths.LOGIN}>login</NavLink>
                    <Link to={paths.REGISTER}>registration</Link>
                    <Link to={paths.CHECK_EMAIL}>check-email</Link>
                    <Link to={paths.SET_NEW_PASSWORD}>new pass</Link>
                    <Link to={paths.FORGOT_PASSWORD}>forgot</Link>
                    <Link to={paths.PAGE_NOT_FOUND}>404</Link>
                    <Link to={paths.PROFILE}>Profile</Link>
                    <Link to={paths.PACKS}>Packs</Link>
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
    );
};

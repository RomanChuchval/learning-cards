import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import myAvatar from 'assets/img/avatar.jpg';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { EditableTitle, InfoMessage, SuperButton } from 'common';

export const ProfileCard = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
            <Paper
                sx={{
                    minWidth: '413px',
                    minHeight: '360px',
                    p: '35px',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component={'span'} sx={{ fontWeight: '600', fontSize: '22px' }}>
                    Personal Information
                </Typography>
                <Badge
                    overlap={'circular'}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <IconButton
                            disableRipple={true}
                            sx={{
                                width: '30px',
                                height: '30px',
                                border: '1px solid #fff',
                                bgcolor: '#808080',
                            }}
                        >
                            <LocalSeeOutlinedIcon sx={{ fontSize: '16px', color: '#FFF' }} />
                        </IconButton>
                    }
                >
                    <Avatar
                        alt='user avatar'
                        src={myAvatar}
                        sx={{ width: '96px', height: '96px', mt: '30px' }}
                    />
                </Badge>
                <EditableTitle title={'Roman'} margin={'20px 0 0 0'} />
                <InfoMessage text={'rchuchval@gmail.com'} margin={'10px'} />
                <SuperButton
                    callback={() => {}}
                    name={'Logout'}
                    rounded={true}
                    color={'secondary'}
                    margin={'20px 0 0 0'}
                    icon={<LogoutIcon />}
                />
            </Paper>
        </Box>
    );
};

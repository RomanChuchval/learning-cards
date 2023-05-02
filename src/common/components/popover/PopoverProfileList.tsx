import React, { FC, ReactNode } from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

type PopoverListPropsType = {
    children?: ReactNode;
};
export const PopoverProfileList: FC<PopoverListPropsType> = () => {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => {}}>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary='Profile' />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton onClick={() => {}}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

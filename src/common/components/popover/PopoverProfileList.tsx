import React, { FC, ReactNode } from 'react'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import { paths } from 'common/constants'
import { useNavigate } from 'react-router-dom'

type PopoverListPropsType = {
    children?: ReactNode
}
export const PopoverProfileList: FC<PopoverListPropsType> = () => {
    const navigate = useNavigate()

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(paths.PROFILE)}>
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
    )
}

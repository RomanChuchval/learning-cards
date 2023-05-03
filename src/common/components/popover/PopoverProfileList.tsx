import React, { FC, ReactNode } from 'react'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
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

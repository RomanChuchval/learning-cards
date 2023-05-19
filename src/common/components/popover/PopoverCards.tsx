import React from 'react'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SchoolIcon from '@mui/icons-material/School'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { UpdatePackTitle } from 'features/cards/components/modals/UpdatePackTitle'

type PopoverCardsPackPropsType = {
    packId: string
    packName: string
    handleClose: () => void
}

export const PopoverCards: React.FC<PopoverCardsPackPropsType> = ({ packId, packName }) => {
    return (
        <List>
            <ListItem disablePadding>
                <UpdatePackTitle packName={packName} packId={packId} />
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton onClick={() => {}}>
                    <ListItemIcon>
                        <DeleteForeverIcon />
                    </ListItemIcon>
                    <ListItemText primary='Delete' />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton onClick={() => {}}>
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary='Learn' />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

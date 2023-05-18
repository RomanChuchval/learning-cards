import React from 'react'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SchoolIcon from '@mui/icons-material/School'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { UpdatePack } from 'features/packs/components/pack-actions/UpdatePack'

type PopoverCardsPackPropsType = {
    packId: string
    packName: string
}

export const PopoverCardsPack: React.FC<PopoverCardsPackPropsType> = ({ packId, packName }) => {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => {}}>
                    {/*<ListItemIcon>*/}
                    {/*<BorderColorIcon />*/}
                    <UpdatePack packId={packId} packName={packName} />
                    {/*</ListItemIcon>*/}
                    <ListItemText primary='Edit' />
                </ListItemButton>
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

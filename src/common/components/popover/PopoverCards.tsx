import React from 'react'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SchoolIcon from '@mui/icons-material/School'
import { UpdatePackTitle } from 'features/cards/components/cards-actions/UpdatePackTitle'
import { useLearn } from 'features/learn/hooks/useLearn'
import { RemovePackPopover } from 'features/cards/components/cards-actions/RemovePackPopover'

type PopoverCardsPackPropsType = {
    packId: string
    cards: number
    packName: string
    handleClose: () => void
}

export const PopoverCards: React.FC<PopoverCardsPackPropsType> = ({ packId, packName, cards }) => {
    const { learnHandler } = useLearn(packId)
    return (
        <List>
            <ListItem disablePadding>
                <UpdatePackTitle packName={packName} packId={packId} />
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <RemovePackPopover packName={packName} packId={packId} />
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton onClick={learnHandler} disabled={cards === 0}>
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary='Learn' />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

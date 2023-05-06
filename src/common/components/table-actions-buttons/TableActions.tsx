import React, { FC } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import SchoolIcon from '@mui/icons-material/School'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

type TableActionsPropsType = {
    myCards: boolean
    packId: string
    getPackId: (id: string) => void
    handleOpen: () => void
}

export const TableActions: FC<TableActionsPropsType> =
    ({ handleOpen, getPackId, packId, myCards }) => {

    const onUpdate = () => {
        getPackId(packId)
        handleOpen()
    }

    return (
        <Box>
            <IconButton size={'small'}>
                <SchoolIcon />
            </IconButton>
            {myCards && <IconButton size={'small'}
            onClick={onUpdate}>
                <BorderColorIcon />
            </IconButton> }
            {myCards && <IconButton size={'small'}>
                <DeleteForeverIcon />
            </IconButton>}

        </Box>
    )
}

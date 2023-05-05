import React, { FC } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import SchoolIcon from '@mui/icons-material/School'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

type TableActionsPropsType = {
    myCards: boolean
}

export const TableActions: FC<TableActionsPropsType> = ({ myCards }) => {

    return (
        <Box>
            <IconButton size={'small'}>
                <SchoolIcon />
            </IconButton>
            {myCards && <IconButton size={'small'}>
                <BorderColorIcon />
            </IconButton> }
            {myCards && <IconButton size={'small'}>
                <DeleteForeverIcon />
            </IconButton>}

        </Box>
    )
}

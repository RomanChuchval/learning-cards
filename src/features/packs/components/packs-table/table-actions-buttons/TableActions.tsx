import React, { FC } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { UpdatePack } from 'features/packs/components/packs-table/table-actions-buttons/UpdatePack'
import { RemovePack } from 'features/packs/components/packs-table/table-actions-buttons/RemovePack'

type TableActionsPropsType = {
    packName: string
    myCards: boolean
    packId: string
}

export const TableActions: FC<TableActionsPropsType> =
    ({ packId, myCards, packName }) => {

        return (
            <Box>
                <IconButton size={'small'}>
                    <SchoolIcon />
                </IconButton>
                {myCards && <UpdatePack packId={packId}/>}
                {myCards && <RemovePack packName={packName}/>}
            </Box>
        )
    }


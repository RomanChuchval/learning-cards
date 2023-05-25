import React, { FC } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { UpdatePack } from 'features/packs/components/pack-actions/UpdatePack'
import { RemovePack } from 'features/packs/components/pack-actions/RemovePack'
import { useLearn } from 'features/learn/hooks/useLearn'

type TableActionsPropsType = {
    packName: string
    myCards: boolean
    packId: string
}

export const TableActions: FC<TableActionsPropsType> =
    ({ packId, myCards, packName }) => {

    const {learnHandler} = useLearn(packId)

        return (
            <Box display={'flex'}>
                <IconButton size={'small'} onClick={learnHandler}>
                    <SchoolIcon />
                </IconButton>
                {myCards && <UpdatePack packName={packName} packId={packId}/>}
                {myCards && <RemovePack packName={packName} packId={packId}/>}
            </Box>
        )
    }


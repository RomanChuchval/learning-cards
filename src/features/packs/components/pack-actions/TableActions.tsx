import React, { FC } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { UpdatePack } from 'features/packs/components/pack-actions/UpdatePack'
import { RemovePack } from 'features/packs/components/pack-actions/RemovePack'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { learnThunks } from 'features/learn/learn.slice'

type TableActionsPropsType = {
    packName: string
    myCards: boolean
    packId: string
}

export const TableActions: FC<TableActionsPropsType> =
    ({ packId, myCards, packName }) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const learnHandler = () => {
        navigate(paths.LEARN)
        dispatch(learnThunks.getSortCard(packId))
    }

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


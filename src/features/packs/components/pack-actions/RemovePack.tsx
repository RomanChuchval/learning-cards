import React, { memo } from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { modalsAction } from 'features/modals/modals.slice'
import { useAppDispatch } from 'app'

export type RemovePackPropsType = {
    packName: string
    packId: string
}
export const RemovePack: React.FC<RemovePackPropsType> = memo(({ packName, packId }) => {
    const dispatch = useAppDispatch()
    const openRemoveModal = () => {
        dispatch(modalsAction.showRemoveModal({ packId, packName }))
    }

    return (
        <IconButton size={'small'} onClick={openRemoveModal}>
            <DeleteForeverIcon />
        </IconButton>
    )
})

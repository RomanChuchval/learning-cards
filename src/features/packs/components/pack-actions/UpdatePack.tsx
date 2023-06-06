import React, { memo } from 'react'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { modalsAction } from 'features/modals/modals.slice'
import { useAppDispatch } from 'app'

type UpdatePackPropsType = {
    packId: string
    packName: string
    packImg?: string
}
export const UpdatePack: React.FC<UpdatePackPropsType> = memo(
    ({ packId, packName, packImg }) => {
        const dispatch = useAppDispatch()
        const openUpdateModal = () => {
            dispatch(modalsAction.showUpdateModal({ packId, packName, packImg }))
        }

        return (
            <IconButton size={'small'} onClick={openUpdateModal}>
                <BorderColorIcon />
            </IconButton>
        )
    }
)

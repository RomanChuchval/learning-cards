import React from 'react'
import { useModalsPacks } from 'features/packs/components/modals/hooks/useModalsPacks'
import { PacksModal } from 'features/packs/components/modals/PacksModal'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

type RemovePackPropsType = {
    packName: string
}
export const RemovePack: React.FC<RemovePackPropsType> = ({ packName }) => {
    const { removePack, handleOpen, handleSubmit, open, handleClose, register, error } = useModalsPacks()

    return (
        <PacksModal title={'Remove Pack'}
                    packHandler={removePack}
                    handleSubmit={handleSubmit}
                    open={open}
                    packName={packName}
                    removeMod={true}
                    error={error}
                    register={register}
                    handleClose={handleClose}>
            <IconButton size={'small'}
                        onClick={handleOpen}>
                <DeleteForeverIcon />
            </IconButton>
        </PacksModal>
    )
}
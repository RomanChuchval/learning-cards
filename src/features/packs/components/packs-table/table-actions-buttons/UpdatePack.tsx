import React from 'react'
import { useModalsPacks } from 'features/packs/components/modals/hooks/useModalsPacks'
import { PacksModal } from 'features/packs/components/modals/PacksModal'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'

type UpdatePackPropsType = {
    packId: string
}
export const UpdatePack: React.FC<UpdatePackPropsType> = ({ packId }) => {
    const { updatePack, handleOpen, handleSubmit, open, handleClose, register, error } = useModalsPacks(packId)
    return (
        <PacksModal title={'Update pack'}
                    packHandler={updatePack}
                    handleSubmit={handleSubmit}
                    open={open}
                    error={error}
                    register={register}
                    handleClose={handleClose}>
            <IconButton size={'small'}
                        onClick={handleOpen}>
                <BorderColorIcon />
            </IconButton>
        </PacksModal>
    )
}
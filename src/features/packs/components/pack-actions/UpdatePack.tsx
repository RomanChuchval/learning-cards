import React from 'react'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import { AppModal } from 'features/modals/components/AppModal'
import { useAppModals } from 'common/hooks/useAppModals'
import { PacksModalForm } from 'features/packs/components/modals/PacksModalForm'

type UpdatePackPropsType = {
    packId: string
    packName: string
}
export const UpdatePack: React.FC<UpdatePackPropsType> = ({ packId, packName }) => {
    const { openUpdateModal, handleClose, selectedPackId, showUpdateModal } = useAppModals({
        packId,
        packName,
    })
    const { updatePack } = useEditorPack()
    return (
        <>
            <IconButton size={'small'} onClick={openUpdateModal}>
                <BorderColorIcon />
            </IconButton>
            <AppModal
                title={'Update Pack'}
                open={packId === selectedPackId && showUpdateModal}
                handleClose={handleClose}
            >
                <PacksModalForm onSubmit={updatePack} handleClose={handleClose} />
            </AppModal>
        </>
    )
}

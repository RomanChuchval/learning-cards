import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useAppModals, RemoveModal } from 'common'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'

type RemovePackPropsType = {
    packName: string
    packId: string
}
export const RemovePack: React.FC<RemovePackPropsType> = ({ packName, packId }) => {
    const { showRemoveModal, openRemoveModal, handleClose, selectedPackId } = useAppModals({
        packId,
        packName,
    })
    const { removePack } = useEditorPack()

    return (
        <>
            <RemoveModal
                removedTitle={'All cards'}
                entityName={packName}
                title={'Delete Card'}
                open={selectedPackId === packId && showRemoveModal}
                handleClose={handleClose}
                onRemove={removePack}>
                <IconButton size={'small'} onClick={openRemoveModal}>
                    <DeleteForeverIcon />
                </IconButton>
            </RemoveModal>
        </>
    )
}

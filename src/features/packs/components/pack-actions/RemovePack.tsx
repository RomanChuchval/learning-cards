import React, { memo, useCallback } from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useAppModals, RemoveModal } from 'common'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'

export type RemovePackPropsType = {
    packName: string
    packId: string
}
export const RemovePack: React.FC<RemovePackPropsType> = memo(({ packName, packId }) => {
    const { showRemoveModal, openRemoveModal, handleClose, selectedPackId } = useAppModals({
        packId,
        packName,
    })
    const { removePack } = useEditorPack()

    const onRemovePack = useCallback(() => {
        removePack(false)
    }, [removePack])

    return (
        <>
            <RemoveModal
                removedTitle={'All cards'}
                entityName={packName}
                title={'Delete Card'}
                open={selectedPackId === packId && showRemoveModal}
                handleClose={handleClose}
                onRemove={onRemovePack}
            >
                <IconButton size={'small'} onClick={openRemoveModal}>
                    <DeleteForeverIcon />
                </IconButton>
            </RemoveModal>
        </>
    )
})

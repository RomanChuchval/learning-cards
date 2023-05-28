import React, { FC, memo, useCallback } from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ListItemText from '@mui/material/ListItemText'
import { useAppModals } from 'common/hooks/useAppModals'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import { RemoveModal } from 'common/components/modals/RemoveModal'
import { RemovePackPropsType } from 'features/packs/components/pack-actions/RemovePack'

export const RemovePackPopover: FC<RemovePackPropsType> = memo(({ packId, packName }) => {
    const { showRemoveModal, openRemoveModal, handleClose, selectedPackId } = useAppModals({
        packId,
        packName,
    })
    const { removePack } = useEditorPack()

    const onPackRemove = useCallback(() => {
        removePack(true)
    }, [removePack])

    return (
        <>
            <RemoveModal
                removedTitle={'All cards'}
                entityName={packName}
                title={'Delete Card'}
                open={selectedPackId === packId && showRemoveModal}
                handleClose={handleClose}
                onRemove={onPackRemove}
            >
                <ListItemButton onClick={openRemoveModal}>
                    <ListItemIcon>
                        <DeleteForeverIcon />
                    </ListItemIcon>
                    <ListItemText primary='Delete' />
                </ListItemButton>
            </RemoveModal>
        </>
    )
})

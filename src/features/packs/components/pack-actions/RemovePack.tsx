import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useAppModals } from 'common/hooks/useAppModals'
import { RemoveModal } from 'common/components/modals/RemoveModal'
import { useEditorModals } from 'features/packs/hooks/useEditorModals'

type RemovePackPropsType = {
    packName: string
    packId: string
}
export const RemovePack: React.FC<RemovePackPropsType> = ({ packName, packId }) => {
    const { open, handleOpen, handleClose } = useAppModals()
    const {removePack} = useEditorModals(handleClose, packId)

    return (
        <>
            <RemoveModal removedTitle={'All cards'}
                         entityName={packName}
                         title={'Delete Card'}
                         open={open}
                         handleClose={handleClose}
                         onRemove={removePack}>
                <IconButton size={'small'}
                            onClick={handleOpen}>
                    <DeleteForeverIcon />
                </IconButton>
            </RemoveModal>
        </>
    )
}
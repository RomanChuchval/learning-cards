import React from 'react'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { useAppModals } from 'common/hooks/useAppModals'
import { EditorModal } from 'common/components/modals/EditorModal'
import { useEditorModals } from 'features/packs/hooks/useEditorModals'

type UpdatePackPropsType = {
    packId: string
    packName: string
}
export const UpdatePack: React.FC<UpdatePackPropsType> = ({ packId, packName }) => {
    const {open, handleOpen, handleClose} = useAppModals()
    const {updatePack} = useEditorModals(handleClose, packId)

    return (
        <>
            <EditorModal title={'Update Pack'}
                         open={open}
                         packName={packName}
                         handleClose={handleClose}
                         onEditor={updatePack}>
                <IconButton size={'small'}
                            onClick={handleOpen}>
                    <BorderColorIcon />
                </IconButton>
            </EditorModal>
        </>
    )
}
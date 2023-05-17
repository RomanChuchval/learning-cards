import React from 'react'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { useAppModals } from 'common/hooks/useAppModals'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import { EditorPacksModal } from 'features/packs/components/modals/EditorPacksModal'
import { EditorModal } from 'common/components/modals/EditorModal'
import { useModalsForm } from 'common/hooks/useModalsForm'

type UpdatePackPropsType = {
    packId: string
    packName: string
}
export const UpdatePack: React.FC<UpdatePackPropsType> = ({ packId, packName }) => {
    const { open, handleOpen, handleClose } = useAppModals()
    const { updatePack } = useEditorPack(handleClose, packId)
    const { errors, register, handleSubmit, callbackHandler } = useModalsForm(
        updatePack,
        { textInput: packName },
        ['textInput']
    )

    return (
        <>
            <IconButton size={'small'} onClick={handleOpen}>
                <BorderColorIcon />
            </IconButton>
            <EditorModal
                title={'Update Pack'}
                handleSubmit={handleSubmit}
                callbackHandler={callbackHandler}
                open={open}
                handleClose={handleClose}
            >
                <EditorPacksModal errors={errors} register={register} />
            </EditorModal>
        </>
    )
}

import React, { memo } from 'react'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import { AppModal } from 'features/modals/components/AppModal'
import { PacksModalForm } from 'features/packs/components/modals/PacksModalForm'
import { useAppModals } from 'common'

type UpdatePackPropsType = {
    packId: string
    packName: string
    defaultImg?: string
}
export const UpdatePack: React.FC<UpdatePackPropsType> = memo(
    ({ packId, packName, defaultImg }) => {
        const { openUpdateModal, handleClose, showUpdateModal, isSelectedPack } = useAppModals({
            packId,
            packName,
        })

        const { updatePack, img, setImg } = useEditorPack(defaultImg)
        return (
            <>
                <IconButton size={'small'} onClick={openUpdateModal}>
                    <BorderColorIcon />
                </IconButton>
                <AppModal
                    title={'Update Pack'}
                    open={isSelectedPack && showUpdateModal}
                    handleClose={handleClose}
                >
                    <PacksModalForm
                        onSubmit={updatePack}
                        handleClose={handleClose}
                        img={img}
                        setImg={setImg}
                        defaultImg={defaultImg}
                    />
                </AppModal>
            </>
        )
    }
)

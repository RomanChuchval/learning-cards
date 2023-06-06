import React, { useCallback } from 'react'
import Grid from '@mui/material/Grid'
import { PacksHeader } from 'features/packs/components/packs/PacksHeader'
import { PackMain } from 'features/packs/components/packs/PackMain'
import { PacksModalForm } from 'features/modals/components/packs-modals/PacksModalForm'
import { AppModal } from 'features/modals/components/common/AppModal'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import { RemoveModalMessage } from 'features/modals/components/common/RemoveModalMessage'
import { useAppModals } from 'features/modals/hooks/useAppModals'
import { RemoveModal } from 'features/modals/components/common/RemoveModal'

export const Packs = () => {
    const { packCover, packName, handleClose, isModalOpen, modalAction, modalTitle } =
        useAppModals()
    const { createPack, updatePack, removePack, img, setImg } = useEditorPack(packCover)

    const onRemovePack = useCallback(() => {
        removePack(false)
    }, [removePack])

    return (
        <>
            <Grid container spacing={2} sx={{ mt: '1px' }} rowSpacing={5} alignItems={'flex-end'}>
                <PacksHeader />
                <PackMain />
            </Grid>

            <AppModal title={modalTitle} open={isModalOpen} handleClose={handleClose}>
                {modalAction === 'createPack' && (
                    <PacksModalForm
                        onSubmit={createPack}
                        handleClose={handleClose}
                        img={img}
                        setImg={setImg}
                    />
                )}
                {modalAction === 'updatePack' && (
                    <PacksModalForm
                        onSubmit={updatePack}
                        handleClose={handleClose}
                        img={img}
                        setImg={setImg}
                        defaultImg={packCover}
                    />
                )}
                {modalAction === 'removePack' && (
                    <RemoveModal
                        modalTitle={modalTitle}
                        handleClose={handleClose}
                        onRemove={onRemovePack}
                    >
                        <RemoveModalMessage entityName={packName} whatToDelete={'This pack'} />
                    </RemoveModal>
                )}
            </AppModal>
        </>
    )
}

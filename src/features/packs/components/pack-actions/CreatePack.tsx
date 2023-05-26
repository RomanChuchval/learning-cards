import React from 'react'
import { PacksModalForm } from 'features/packs/components/modals/PacksModalForm'
import { AppModal } from 'features/modals/components/AppModal'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import { useAppModals, SuperButton } from 'common'
import { useApp } from 'app'

export const CreatePack = () => {
    const { openCreateModal, showCreateModal, handleClose } = useAppModals()
    const { createPack, img, setImg } = useEditorPack()
    const { isLoadingApp } = useApp()

    return (
        <>
            <SuperButton
                name={'Add new pack'}
                callback={openCreateModal}
                rounded={true}
                textColor={'white'}
                disable={isLoadingApp} />
            <AppModal title={'Create Pack'} open={showCreateModal} handleClose={handleClose}>
                <PacksModalForm onSubmit={createPack} handleClose={handleClose} img={img} setImg={setImg} />
            </AppModal>
        </>
    )
}

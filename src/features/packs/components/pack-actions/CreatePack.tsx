import { SuperButton } from 'common'
import React from 'react'
import { AppModal } from 'features/modals/components/AppModal'
import { useAppModals } from 'common/hooks/useAppModals'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import { useApp } from 'app/hooks/useApp'
import { PacksModalForm } from 'features/packs/components/modals/PacksModalForm'

export const CreatePack = () => {
    const { openCreateModal, showCreateModal, handleClose } = useAppModals()
    const { createPack } = useEditorPack()
    const { isLoadingApp } = useApp()

    return (
        <>
            <SuperButton
                name={'Add new pack'}
                callback={openCreateModal}
                rounded={true}
                textColor={'white'}
                disable={isLoadingApp}
            />
            <AppModal title={'Create Pack'} open={showCreateModal} handleClose={handleClose}>
                <PacksModalForm onSubmit={createPack} handleClose={handleClose} />
            </AppModal>
        </>
    )
}

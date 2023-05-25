import React from 'react'
import { SuperButton } from 'common'
import { useAppModals } from 'common/hooks/useAppModals'
import { useApp } from 'app/hooks/useApp'
import { AppModal } from 'features/modals/components/AppModal'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'
import { CardsModalForm } from 'features/cards/components/modals/CardsModalForm'

export const CreateCard = () => {
    const { openCreateModal, showCreateModal, handleClose } = useAppModals()
    const { createCard } = useEditorCards()
    const { isLoadingApp } = useApp()

    return (
        <>
            <SuperButton
                name={'Add new card'}
                callback={openCreateModal}
                rounded={true}
                textColor={'white'}
                disable={isLoadingApp}
            />
            <AppModal title={'Create Card'} open={showCreateModal} handleClose={handleClose}>
                <CardsModalForm onSubmit={createCard} handleClose={handleClose} />
            </AppModal>
        </>
    )
}

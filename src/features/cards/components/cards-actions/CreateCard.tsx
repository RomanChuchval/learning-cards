import React, { memo } from 'react'
import { SuperButton, useAppModals } from 'common'
import { AppModal } from 'features/modals/components/AppModal'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'
import { CardsModalForm } from 'features/cards/components/modals/CardsModalForm'
import { useAppState } from 'app'

export const CreateCard = memo(() => {
    const { openCreateModal, showCreateModal, handleClose } = useAppModals()
    const { createCard } = useEditorCards()
    const { isLoadingApp } = useAppState()
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
})

import React from 'react'
import { SuperButton } from 'common'
import { useAppModals } from 'common/hooks/useAppModals'
import { useApp } from 'app/hooks/useApp'
import { EditorModal } from 'common/components/modals/EditorModal'
import { useModalsForm } from 'common/hooks/useModalsForm'
import { EditorCardsModal } from 'features/cards/components/cards/EditorCardsModal'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'

export const CreateCard = () => {
    const { open, handleClose, handleOpen } = useAppModals()
    const { createCard } = useEditorCards(handleClose)
    const { register, handleSubmit, callbackHandler } = useModalsForm(createCard)
    const { isLoading } = useApp()

    return (
        <>
            <SuperButton
                name={'Add new card'}
                callback={handleOpen}
                rounded={true}
                textColor={'white'}
                disable={isLoading}
            />
            <EditorModal
                title={'Add new card'}
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                callbackHandler={callbackHandler}
            >
                <EditorCardsModal register={register} />
            </EditorModal>
        </>
    )
}

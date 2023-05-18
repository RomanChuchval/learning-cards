import React from 'react'
import { SuperButton } from 'common'
import { useAppModals } from 'common/hooks/useAppModals'
import { useApp } from 'app/hooks/useApp'
import { AppModal } from 'features/modals/components/AppModal'
import { useModalsForm } from 'common/hooks/useModalsForm'
import { EditorCardsModal } from 'features/cards/components/cards/EditorCardsModal'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'

export type CreateCardPropsType = {
    packUserId: string
}
export const CreateCard: React.FC<CreateCardPropsType> = ({ packUserId }) => {
    // const { open, handleClose, handleOpen } = useAppModals()
    // const { createCard } = useEditorCards(handleClose)
    // const { register, handleSubmit, onSubmitHandler } = useModalsForm(createCard)
    const { isLoading } = useApp()

    return (
        <>
            {/*<SuperButton*/}
            {/*    name={'Add new card'}*/}
            {/*    callback={handleOpen}*/}
            {/*    rounded={true}*/}
            {/*    textColor={'white'}*/}
            {/*    disable={isLoading}*/}
            {/*/>*/}
            {/*<AppModal*/}
            {/*    title={'Add new card'}*/}
            {/*    open={open}*/}
            {/*    handleClose={handleClose}*/}
            {/*    handleSubmit={handleSubmit}*/}
            {/*    callbackHandler={callbackHandler}*/}
            {/*>*/}
            {/*    <EditorCardsModal register={register} />*/}
            {/*</AppModal>*/}
        </>
    )
}

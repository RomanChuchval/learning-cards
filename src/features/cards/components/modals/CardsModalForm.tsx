import React from 'react'
import { useModalsForm } from 'common/hooks/useModalsForm'
import { ModalForm } from 'common/components/modals/ModalForm'
import { FormInputValues } from 'features/auth/hooks/useAppForm'
import { EditorCardsModal } from 'features/cards/components/cards/EditorCardsModal'

type CardsModalFormPropsType = {
    onSubmit: (data: FormInputValues) => void
    handleClose: () => void
}
export const CardsModalForm: React.FC<CardsModalFormPropsType> = ({ onSubmit, handleClose }) => {
    const { modalState, register, handleSubmit, onSubmitHandler } = useModalsForm(onSubmit)

    return (
        <>
            <ModalForm
                handleSubmit={handleSubmit}
                onSubmit={onSubmitHandler}
                handleClose={handleClose}
            >
                <EditorCardsModal
                    register={register}
                    answer={modalState.answer}
                    question={modalState.question}
                />
            </ModalForm>
        </>
    )
}

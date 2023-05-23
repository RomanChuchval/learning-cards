import React from 'react'
import { useModalsForm } from 'common/hooks/useModalsForm'
import { ModalForm } from 'common/components/modals/ModalForm'
import { FormInputValues } from 'common/hooks/useAppForm'
import { EditorCardsModal } from 'features/cards/components/modals/EditorCardsModal'

type CardsModalFormPropsType = {
    onSubmit: (data: FormInputValues) => void
    handleClose: () => void
}
export const CardsModalForm: React.FC<CardsModalFormPropsType> = ({ onSubmit, handleClose }) => {
    const { modalState, register, handleSubmit, onSubmitHandler, control } = useModalsForm(onSubmit)

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
                    answerImg={modalState.answerImg}
                    questionImg={modalState.questionImg}
                    control={control}
                />
            </ModalForm>
        </>
    )
}

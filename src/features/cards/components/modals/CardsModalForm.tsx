import React, { memo } from 'react'
import { useModalsForm, ModalForm, FormInputValues } from 'common'
import { EditorCardsModal } from 'features/cards/components/modals/EditorCardsModal'

type CardsModalFormPropsType = {
    onSubmit: (data: FormInputValues) => void
    handleClose: () => void
}
export const CardsModalForm: React.FC<CardsModalFormPropsType> = memo(
    ({ onSubmit, handleClose }) => {
        const { modalState, register, handleSubmit, onSubmitHandler, control } =
            useModalsForm(onSubmit)

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
)

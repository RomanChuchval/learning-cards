import React, { memo } from 'react'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { AppModal } from 'features/modals/components/AppModal'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'
import { CardsModalForm } from 'features/cards/components/modals/CardsModalForm'
import { useAppModals } from 'common'
import { useApp } from 'app'

type UpdateCardActionsPropsType = {
    question: string
    answer: string
    cardId: string
    answerImg?: string
    questionImg?: string
}
export const UpdateCard: React.FC<UpdateCardActionsPropsType> = memo(
    ({ question, answer, cardId, answerImg, questionImg }) => {
        const { openUpdateModal, showUpdateModal, handleClose, isSelectedCard } = useAppModals({
            question,
            answer,
            cardId,
            answerImg,
            questionImg,
        })
        const { updateCard } = useEditorCards()
        const { isLoadingApp } = useApp()
        return (
            <>
                <IconButton size={'small'} onClick={openUpdateModal} disabled={isLoadingApp}>
                    <BorderColorIcon sx={{ fontSize: '18px' }} />
                </IconButton>
                <AppModal
                    title={'Update Card'}
                    open={isSelectedCard && showUpdateModal}
                    handleClose={handleClose}
                >
                    <CardsModalForm onSubmit={updateCard} handleClose={handleClose} />
                </AppModal>
            </>
        )
    }
)

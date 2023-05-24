import React from 'react'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { AppModal } from 'features/modals/components/AppModal'
import { useAppModals } from 'common/hooks/useAppModals'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'
import { CardsModalForm } from 'features/cards/components/modals/CardsModalForm'

type UpdateCardActionsPropsType = {
    question: string
    answer: string
    cardId: string
    answerImg?: string
    questionImg?: string
}
export const UpdateCard: React.FC<UpdateCardActionsPropsType> = ({
    question,
    answer,
    cardId,
    answerImg,
    questionImg,
}) => {
    const { openUpdateModal, showUpdateModal, handleClose, isSelectedCard } = useAppModals({
        question,
        answer,
        cardId,
        answerImg,
        questionImg,
    })
    const { updateCard } = useEditorCards()
    return (
        <>
            <IconButton size={'small'} onClick={openUpdateModal}>
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

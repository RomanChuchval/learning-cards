import React from 'react'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { AppModal } from 'features/modals/components/AppModal'
import { useAppModals } from 'common/hooks/useAppModals'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'
import { useApp } from 'app/hooks/useApp'
import { CardsModalForm } from 'features/cards/components/modals/CardsModalForm'

type UpdateCardActionsPropsType = {
    question: string
    answer: string
    cardId: string
}
export const UpdateCard: React.FC<UpdateCardActionsPropsType> = ({ question, answer, cardId }) => {
    const { openUpdateModal, showUpdateModal, handleClose, selectedCardId } = useAppModals({
        question,
        answer,
        cardId,
    })
    const { updateCard } = useEditorCards()
    const { isLoading } = useApp()
    return (
        <>
            <IconButton size={'small'} onClick={openUpdateModal} disabled={isLoading}>
                <BorderColorIcon sx={{ fontSize: '18px' }} />
            </IconButton>
            <AppModal
                title={'Create Card'}
                open={selectedCardId === cardId && showUpdateModal}
                handleClose={handleClose}
            >
                <CardsModalForm onSubmit={updateCard} handleClose={handleClose} />
            </AppModal>
        </>
    )
}

import React from 'react'
import { useAppModals } from 'common/hooks/useAppModals'
import { RemoveModal } from 'common/components/modals/RemoveModal'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'
import { useApp } from 'app/hooks/useApp'

type RemoveCardPropsType = {
    cardId: string
    question: string
}
export const RemoveCard: React.FC<RemoveCardPropsType> = ({ cardId, question }) => {
    const { showRemoveModal, openRemoveModal, handleClose, selectedCardId } = useAppModals({
        cardId,
        question,
    })
    const { removeCard } = useEditorCards()

    return (
        <>
            <RemoveModal
                removedTitle={'This card'}
                entityName={question}
                title={'Delete Card'}
                open={selectedCardId === cardId && showRemoveModal}
                handleClose={handleClose}
                onRemove={removeCard}
            >
                <IconButton size={'small'} onClick={openRemoveModal}>
                    <DeleteForeverIcon sx={{ fontSize: '20px' }} />
                </IconButton>
            </RemoveModal>
        </>
    )
}

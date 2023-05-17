import React from 'react'
import { useAppModals } from 'common/hooks/useAppModals'
import { RemoveModal } from 'common/components/modals/RemoveModal'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'

type RemoveCardPropsType = {
    cardId: string
    question: string
}
export const RemoveCard: React.FC<RemoveCardPropsType> = ({ cardId, question }) => {
    const { open, handleOpen, handleClose } = useAppModals()
    const { removeCard } = useEditorCards(handleClose, cardId)

    return (
        <>
            <RemoveModal
                removedTitle={'This card'}
                entityName={question}
                title={'Delete Card'}
                open={open}
                handleClose={handleClose}
                onRemove={removeCard}
            >
                <IconButton size={'small'} onClick={handleOpen}>
                    <DeleteForeverIcon sx={{ fontSize: '20px' }} />
                </IconButton>
            </RemoveModal>
        </>
    )
}

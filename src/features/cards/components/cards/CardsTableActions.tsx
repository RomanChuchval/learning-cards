import React from 'react'
import Box from '@mui/material/Box'
import { UpdateCard } from 'features/cards/components/cards/UpdateCard'
import { RemoveCard } from 'features/cards/components/cards/RemoveCard'

type CardsTableActionsPropsType = {
    cardId: string
    question: string
    answer: string
}
export const CardsTableActions: React.FC<CardsTableActionsPropsType> = ({
    question,
    answer,
    cardId,
}) => {
    return (
        <Box sx={{ display: 'flex', width: '70px' }}>
            <UpdateCard question={question} answer={answer} cardId={cardId} />
            <RemoveCard cardId={cardId} question={question} />
        </Box>
    )
}

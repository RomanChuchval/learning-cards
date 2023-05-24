import React from 'react'
import { CustomTable } from 'common/components/table/CustomTable'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { CardsRating } from 'common/components/rating/CardsRating'
import { useCards } from 'features/cards/hooks/useCards'
import { CardsTableActions } from 'features/cards/components/cards-actions/CardsTableActions'
import { useAuth } from 'features/auth/hooks/useAuth'
import Box from '@mui/material/Box'
import { TableData } from 'common/components/table/TableData'
import { useApp } from 'app/hooks/useApp'
import { TableSkeleton } from 'common/components/table/table-skeleton/TableSkeleton'

export const CardsTable = () => {
    const { cards, packUserId, cardsPageCountParams } = useCards()
    const { authorizedUserId } = useAuth()
    const { isCardsLoading } = useApp()

    const isMyPack = packUserId === authorizedUserId
    const tableBodySX = {
        wordWrap: 'break-word',
        minWidth: '150px',
        maxWidth: '200px',
    }

    return (
        <div>
            <CustomTable
                tableCellForHeader={['Question', 'Answer', 'Last Updated', 'Grade']}
                sortHandler={() => {}}
                setSort={() => {}}
                sort={true}
            >
                {isCardsLoading ? (
                    <TableSkeleton defaultCell={4} defaultRow={cardsPageCountParams ?? '4'} />
                ) : (
                    cards?.map(card => (
                        <TableRow key={card._id}>
                            <TableCell sx={{ ...tableBodySX, paddingLeft: '40px' }}>
                                <TableData image={card.questionImg} text={card.question} />
                            </TableCell>
                            <TableCell sx={tableBodySX}>
                                <TableData image={card.answerImg} text={card.answer} />
                            </TableCell>
                            <TableCell sx={tableBodySX}>{card.updated.slice(0, 10)}</TableCell>
                            <TableCell sx={tableBodySX}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CardsRating defaultValue={card.grade} />
                                    {isMyPack && (
                                        <CardsTableActions
                                            cardId={card._id}
                                            question={card.question}
                                            answer={card.answer}
                                            questionImg={card.questionImg}
                                            answerImg={card.answerImg}
                                        />
                                    )}
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))
                )}
            </CustomTable>
        </div>
    )
}

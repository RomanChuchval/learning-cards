import React from 'react'
import { CustomTable } from 'common/components/table/CustomTable'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { CardsRating } from 'common/components/rating/CardsRating'
import { useCards } from 'features/cards/hooks/useCards'

export const CardsTable = () => {
    const { cards } = useCards()
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
                {cards?.map(card => (
                    <TableRow key={card._id}>
                        <TableCell sx={{ ...tableBodySX }}>{card.question}</TableCell>
                        <TableCell sx={tableBodySX}>{card.answer}</TableCell>
                        <TableCell sx={tableBodySX}>{card.updated.slice(0, 10)}</TableCell>
                        <TableCell sx={tableBodySX}>
                            <CardsRating defaultValue={card.grade} />
                        </TableCell>
                    </TableRow>
                ))}
            </CustomTable>
        </div>
    )
}

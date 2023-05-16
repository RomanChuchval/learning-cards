import React from 'react'
import { CustomTable } from 'common/components/table/CustomTable'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { CardsRating } from 'common/components/rating/CardsRating'

export const CardsTable = () => {
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
                <TableRow>
                    <TableCell sx={{ ...tableBodySX }}>1</TableCell>
                    <TableCell sx={tableBodySX}>2</TableCell>
                    <TableCell sx={tableBodySX}>3</TableCell>
                    <TableCell sx={tableBodySX}>
                        <CardsRating defaultValue={4} />
                    </TableCell>
                </TableRow>
            </CustomTable>
        </div>
    )
}

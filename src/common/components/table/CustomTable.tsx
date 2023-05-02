import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React from 'react'
import { CardsRating } from 'common/components/rating/CardsRating'

const tableCellForHeader = ['Cards', 'Last Updated', 'Created by', 'Actions', 'kjsdhf']
const tableCellForBody = [
    {
        answer: 'no answer',
        question: 'no question',
        cardsPack_id: '5eb6a2f72f44849402d46c6ac4',
        grade: 4.987525071790364,
        shots: 1,
        user_id: '142151531535151',
        created: '2020-05-13T11:05:44.867Z',
        updated: '2020-05-13T11:05:44.867Z',
        _id: '5ebbd48876810f1ad0e7ece3',
    },
    {
        answer: 'no answer',
        question: 'no question',
        cardsPack_id: '5eb6a2f72f849402d446c6ac4',
        grade: 3.656514,
        shots: 1,
        user_id: '142151531535151',
        created: '2020-05-13T11:05:44.867Z',
        updated: '2020-05-13T11:05:44.867Z',
        _id: '5ebbd48876810f1ad0e7ece3',
    },
    {
        answer: 'no answer',
        question: 'no question',
        cardsPack_id: '5eb6a2f72f8494032d46c6ac4',
        grade: 4.75641614,
        shots: 1,
        user_id: '142151531535151',
        created: '2020-05-13T11:05:44.867Z',
        updated: '2020-05-13T11:05:44.867Z',
        _id: '5ebbd48876810f1ad0e7ece3',
    },
]

export const CustomTable = () => {
    const tableHeaderSX = {
        fontWeight: 900,
        '&:first-child': { paddingLeft: '40px' },
        '&:last-child': { paddingRight: '54px' },
    }
    const tableBodySX = {
        wordWrap: 'break-word',
        minWidth: '200px',
        maxWidth: '300px',
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow sx={{ background: '#EFEFEF' }}>
                        {tableCellForHeader.map(textHead => (
                            <TableCell sx={tableHeaderSX} key={textHead}>
                                {textHead}
                                {textHead === 'Last Updated' && (
                                    <IconButton
                                        onClick={() => {
                                            alert('sortTable')
                                        }}
                                    >
                                        <ArrowDropDownIcon />
                                    </IconButton>
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableCellForBody.map(textBody => {
                        return (
                            <TableRow key={textBody._id}>
                                <TableCell sx={{ ...tableBodySX, paddingLeft: '40px' }}>
                                    {textBody.question}
                                </TableCell>
                                <TableCell sx={tableBodySX}>{textBody.answer}</TableCell>
                                <TableCell>{textBody.updated}</TableCell>
                                <TableCell sx={{ paddingRight: '54px' }}>
                                    <CardsRating
                                        defaultValue={Math.floor(textBody.grade * 2) / 2}
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

import React from 'react'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { CardsRating } from 'common/components/rating/CardsRating'
import { TableActions } from 'common/components/table-actions-buttons/TableActions'

const tableCellForHeader = ['Cards', 'Last Updated', 'Created by', 'Actions']
// const tableCellForBody = [
//     {
//         answer: 'no answer',
//         question: 'no question',
//         cardsPack_id: '5eb6a2f72f44849402d46c6ac4',
//         grade: 4.987525071790364,
//         shots: 1,
//         user_id: '142151531535151',
//         created: '2020-05-13T11:05:44.867Z',
//         updated: '2020-05-13T11:05:44.867Z',
//         _id: '5ebbd48876810f1ad0e7ece3',
//     },
//     {
//         answer: 'no answer',
//         question: 'no question',
//         cardsPack_id: '5eb6a2f72f44849402d46c6ac4',
//         grade: 4.987525071790364,
//         shots: 1,
//         user_id: '142151531535151',
//         created: '2020-05-13T11:05:44.867Z',
//         updated: '2020-05-13T11:05:44.867Z',
//         _id: '5ebbd48876810f1ad0e7ece3',
//     },
//     {
//         answer: 'no answer',
//         question: 'no question',
//         cardsPack_id: '5eb6a2f72f44849402d46c6ac4',
//         grade: 4.987525071790364,
//         shots: 1,
//         user_id: '142151531535151',
//         created: '2020-05-13T11:05:44.867Z',
//         updated: '2020-05-13T11:05:44.867Z',
//         _id: '5ebbd48876810f1ad0e7ece3',
//     },
//     {
//         answer: 'no answer',
//         question: 'no question',
//         cardsPack_id: '5eb6a2f72f44849402d46c6ac4',
//         grade: 4.987525071790364,
//         shots: 1,
//         user_id: '142151531535151',
//         created: '2020-05-13T11:05:44.867Z',
//         updated: '2020-05-13T11:05:44.867Z',
//         _id: '5ebbd48876810f1ad0e7ece3',
//     },
//     {
//         answer: 'no answer',
//         question: 'no question',
//         cardsPack_id: '5eb6a2f72f849402d446c6ac4',
//         grade: 3.656514,
//         shots: 1,
//         user_id: '142151531535151',
//         created: '2020-05-13T11:05:44.867Z',
//         updated: '2020-05-13T11:05:44.867Z',
//         _id: '5ebbd48876810f1ad0e7ece3',
//     },
//     {
//         answer: 'no answer',
//         question: 'no question',
//         cardsPack_id: '5eb6a2f72f8494032d46c6ac4',
//         grade: 4.75641614,
//         shots: 1,
//         user_id: '142151531535151',
//         created: '2020-05-13T11:05:44.867Z',
//         updated: '2020-05-13T11:05:44.867Z',
//         _id: '5ebbd48876810f1ad0e7ece3',
//     },
// ]

type CustomTablePropsType = {
    children: React.ReactNode
    sortHandler: () => void
    setSort: (value: boolean) => void
    sort: boolean
}

export const CustomTable: React.FC<CustomTablePropsType> = ({ children, sort, setSort, sortHandler }) => {
    const tableHeaderSX = {
        fontWeight: 700,
        '&:first-child': { paddingLeft: '40px' },
        '&:last-child': { paddingRight: '54px' }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow sx={{ background: '#EFEFEF' }}>
                        {tableCellForHeader.map(textHead => (
                            <TableCell sx={tableHeaderSX} key={textHead}>
                                {textHead}
                                {textHead === 'Last Updated' && (
                                    <IconButton
                                        onClick={() => {
                                            sortHandler()
                                            setSort(!sort)
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
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


import React from 'react'
import { PageTitle } from 'common/components/page-title/PageTitle'
import { SearchBar } from 'common/components/search-bar/SearchBar'
import Stack from '@mui/material/Stack'
import { ShowPacksCards } from 'common/components/show-packs-cards/ShowPacksCards'
import { CardsCountSlider } from 'common/components/number-of-cards-slider/CardsCountSlider'
import { ClearFilter } from 'common/components/clear-filter/ClearFilter'
import { CardsPagination } from 'common/components/pagination/CardsPagination'
import { CardsRating } from 'common/components/rating/CardsRating'
import { CustomTable } from 'common/components/table/CustomTable'
import { TableActions } from 'common/components/table-actions-buttons/TableActions'
import TableRow from '@mui/material/TableRow/TableRow'
import TableCell from '@mui/material/TableCell/TableCell'
import { PacksModal } from 'features/packs/components/modals/PacksModal'

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
const tableBodySX = {
    wordWrap: 'break-word',
    minWidth: '200px',
    maxWidth: '300px',
}

export const Sandbox = () => {
    return (
        <Stack spacing={5} sx={{ mt: '50px' }}>
            <PageTitle title={'Packs list'} />
            <SearchBar fullWidth={true} onChange={()=>{}} value={'sdf'}/>
            <SearchBar onChange={()=>{}} value={'sdf'}/>
            <ShowPacksCards onClick={()=>{}} onMy={true} setOnMy={()=>{}}/>
            <CardsCountSlider onChange={()=>{}} minMax={[]} setMinMax={()=>{}}/>
            <CardsPagination page={1} pageCount={7} totalCount={100} onChange={() => {}} />
            <ClearFilter clearFiltersHandler={()=>{}}/>
            <CardsRating defaultValue={2.5} />
            {/*<TableActions myCards={true} handleOpen={()=>{}} getPackId={()=>{}} packId={'ssd'} onRemovePack={()=>{}}/>*/}
            <CustomTable sort={true} setSort={()=>{}} sortHandler={()=>{}} tableCellForHeader={['Cards', 'Last Updated', 'Created by', 'Actions']}>
                {tableCellForBody.map(textBody => {
                    return (
                        <TableRow key={textBody._id}>
                            <TableCell sx={{ ...tableBodySX, paddingLeft: '40px' }}>
                                {textBody.question}
                            </TableCell>
                            <TableCell sx={tableBodySX}>{textBody.answer}</TableCell>
                            <TableCell>{textBody.updated}</TableCell>
                            <TableCell sx={{ paddingRight: '54px' }}>
                                {/*<TableActions myCards={true} handleOpen={()=>{}} getPackId={()=>{}} packId={'ssd'} onRemovePack={()=>{}}/>*/}
                            </TableCell>
                        </TableRow>
                    )
                })}
            </CustomTable>
        </Stack>
    )
}
